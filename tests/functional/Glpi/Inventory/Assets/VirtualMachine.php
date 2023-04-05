<?php

/**
 * ---------------------------------------------------------------------
 *
 * GLPI - Gestionnaire Libre de Parc Informatique
 *
 * http://glpi-project.org
 *
 * @copyright 2015-2023 Teclib' and contributors.
 * @copyright 2003-2014 by the INDEPNET Development Team.
 * @licence   https://www.gnu.org/licenses/gpl-3.0.html
 *
 * ---------------------------------------------------------------------
 *
 * LICENSE
 *
 * This file is part of GLPI.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * ---------------------------------------------------------------------
 */

namespace tests\units\Glpi\Inventory\Asset;

include_once __DIR__ . '/../../../../abstracts/AbstractInventoryAsset.php';

/* Test for inc/inventory/asset/controller.class.php */

class VirtualMachine extends AbstractInventoryAsset
{
    protected function assetProvider(): array
    {
        return [
            [
                'xml' => "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<REQUEST>
  <CONTENT>
    <VIRTUALMACHINES>
      <MEMORY>1048</MEMORY>
      <NAME>centos7.0</NAME>
      <STATUS>off</STATUS>
      <SUBSYSTEM>kvm</SUBSYSTEM>
      <UUID>c37f7ce8-af95-4676-b454-0959f2c5e162</UUID>
      <VCPU>1</VCPU>
      <VMTYPE>libvirt</VMTYPE>
    </VIRTUALMACHINES>
    <VERSIONCLIENT>FusionInventory-Inventory_v2.4.1-2.fc28</VERSIONCLIENT>
  </CONTENT>
  <DEVICEID>glpixps.teclib.infra-2018-10-03-08-42-36</DEVICEID>
  <QUERY>INVENTORY</QUERY>
  </REQUEST>",
                'expected'  => '{"memory": 1048, "name": "centos7.0", "status": "off", "subsystem": "kvm", "uuid": "c37f7ce8-af95-4676-b454-0959f2c5e162", "vcpu": 1, "vmtype": "libvirt", "ram": 1048, "virtualmachinetypes_id": "libvirt", "virtualmachinesystems_id": "kvm", "virtualmachinestates_id": "off","is_deleted": 0}'
            ], [
                'xml' => "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<REQUEST>
  <CONTENT>
    <VIRTUALMACHINES>
      <MEMORY>2097</MEMORY>
      <NAME>fedora23</NAME>
      <STATUS>off</STATUS>
      <SUBSYSTEM>kvm</SUBSYSTEM>
      <UUID>358f16bf-6794-4f63-8947-150b807a2294</UUID>
      <VCPU>1</VCPU>
      <VMTYPE>libvirt</VMTYPE>
    </VIRTUALMACHINES>
    <VERSIONCLIENT>FusionInventory-Inventory_v2.4.1-2.fc28</VERSIONCLIENT>
  </CONTENT>
  <DEVICEID>glpixps.teclib.infra-2018-10-03-08-42-36</DEVICEID>
  <QUERY>INVENTORY</QUERY>
  </REQUEST>",
                'expected'  => '{"memory": 2097, "name": "fedora23", "status": "off", "subsystem": "kvm", "uuid": "358f16bf-6794-4f63-8947-150b807a2294", "vcpu": 1, "vmtype": "libvirt", "ram": 2097, "virtualmachinetypes_id": "libvirt", "virtualmachinesystems_id": "kvm", "virtualmachinestates_id": "off","is_deleted": 0}'
            ], [
                'xml' => "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
<REQUEST>
  <CONTENT>
    <VIRTUALMACHINES>
      <MEMORY>4194</MEMORY>
      <NAME>win8.1</NAME>
      <STATUS>off</STATUS>
      <SUBSYSTEM>kvm</SUBSYSTEM>
      <UUID>fcb505ed-0ffa-419e-a5a0-fd20bed80f1e</UUID>
      <VCPU>2</VCPU>
      <VMTYPE>libvirt</VMTYPE>
    </VIRTUALMACHINES>
    <VERSIONCLIENT>FusionInventory-Inventory_v2.4.1-2.fc28</VERSIONCLIENT>
  </CONTENT>
  <DEVICEID>glpixps.teclib.infra-2018-10-03-08-42-36</DEVICEID>
  <QUERY>INVENTORY</QUERY>
  </REQUEST>",
                'expected'  => '{"memory": 4194, "name": "win8.1", "status": "off", "subsystem": "kvm", "uuid": "fcb505ed-0ffa-419e-a5a0-fd20bed80f1e", "vcpu": 2, "vmtype": "libvirt", "ram": 4194, "virtualmachinetypes_id": "libvirt", "virtualmachinesystems_id": "kvm", "virtualmachinestates_id": "off","is_deleted": 0}'
            ]
        ];
    }

    /**
     * @dataProvider assetProvider
     */
    public function testPrepare($xml, $expected)
    {
        $converter = new \Glpi\Inventory\Converter();
        $data = $converter->convert($xml);
        $json = json_decode($data);

        $computer = getItemByTypeName('Computer', '_test_pc01');
        $asset = new \Glpi\Inventory\Asset\VirtualMachine($computer, $json->content->virtualmachines);
        $asset->setExtraData((array)$json->content);
        $conf = new \Glpi\Inventory\Conf();
        $this->boolean(
            $asset->checkConf($conf)
        )->isTrue();
        $result = $asset->prepare();
        $this->object($result[0])->isEqualTo(json_decode($expected));
    }

    public function testHandle()
    {
        $computer = getItemByTypeName('Computer', '_test_pc01');

        //first, check there are no vms linked to this computer
        $cvm = new \ComputerVirtualMachine();
        $this->boolean($cvm->getFromDbByCrit(['computers_id' => $computer->fields['id']]))
           ->isFalse('A virtual machine is already linked to computer!');

        //convert data
        $expected = $this->assetProvider()[0];

        $converter = new \Glpi\Inventory\Converter();
        $data = $converter->convert($expected['xml']);
        $json = json_decode($data);

        $computer = getItemByTypeName('Computer', '_test_pc01');
        $asset = new \Glpi\Inventory\Asset\VirtualMachine($computer, $json->content->virtualmachines);
        $asset->setExtraData((array)$json->content);
        $conf = new \Glpi\Inventory\Conf();
        $this->boolean(
            $asset->checkConf($conf)
        )->isTrue();
        $result = $asset->prepare();
        $this->object($result[0])->isEqualTo(json_decode($expected['expected']));

        $agent = new \Agent();
        $agent->getEmpty();
        $asset->setAgent($agent);

        $conf = new \Glpi\Inventory\Conf();
        $this->boolean(
            $asset->checkConf($conf)
        )->isTrue();

        //handle
        $asset->handleLinks();
        $asset->handle();
        $this->boolean($cvm->getFromDbByCrit(['computers_id' => $computer->fields['id']]))
           ->isTrue('Virtual machine has not been linked to computer :(');
    }

    public function testImportVirtualMachine()
    {

        $xml_source = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
        <REQUEST>
          <CONTENT>
            <BIOS>
              <ASSETTAG></ASSETTAG>
              <BDATE>2018-02-08T00:00:00Z</BDATE>
              <BVERSION>1.3.7</BVERSION>
              <MSN>2YR88P2</MSN>
              <SMANUFACTURER>Dell Inc.</SMANUFACTURER>
              <SMODEL>PowerEdge R640</SMODEL>
              <SSN>2YR88P2</SSN>
            </BIOS>
            <CPUS>
              <CORE>10</CORE>
              <MANUFACTURER>Intel</MANUFACTURER>
              <NAME>Intel(R) Xeon(R) Gold 5115 CPU @ 2.40GHz</NAME>
              <SPEED>2394</SPEED>
              <THREAD>2</THREAD>
            </CPUS>
            <HARDWARE>
              <DNS>10.100.230.2/10.100.230.4</DNS>
              <MEMORY>130625</MEMORY>
              <NAME>ESX-03-DMZ</NAME>
              <UUID>8c8c8944-0074-5632-7452-b2c04f564712</UUID>
              <VMSYSTEM>Physical</VMSYSTEM>
              <WORKGROUP>teclib.fr</WORKGROUP>
            </HARDWARE>
            <NETWORKS>
              <DESCRIPTION>vmk0</DESCRIPTION>
              <IPADDRESS>10.100.240.66</IPADDRESS>
              <IPMASK>255.255.255.192</IPMASK>
              <MACADDR>80:18:44:f0:47:33</MACADDR>
              <MTU>1500</MTU>
              <STATUS>Up</STATUS>
              <VIRTUALDEV>1</VIRTUALDEV>
            </NETWORKS>
            <OPERATINGSYSTEM>
              <BOOT_TIME>2022-08-06 15:40:56</BOOT_TIME>
              <DNS_DOMAIN>insep.fr</DNS_DOMAIN>
              <FQDN>esx-03-dmz.teclib.fr</FQDN>
              <FULL_NAME>VMware ESXi 6.7.0 build-19195723</FULL_NAME>
              <NAME>VMware ESXi</NAME>
              <TIMEZONE>
                <NAME>UTC</NAME>
                <OFFSET>+0000</OFFSET>
              </TIMEZONE>
              <VERSION>6.7.0</VERSION>
            </OPERATINGSYSTEM>
            <VERSIONCLIENT>GLPI-Agent_v1.4-1</VERSIONCLIENT>
            <VIRTUALMACHINES>
              <COMMENT>Computer VM</COMMENT>
              <MAC>00:50:56:90:43:42</MAC>
              <MEMORY>1024</MEMORY>
              <NAME>SRV-DMZ-EZ</NAME>
              <STATUS>running</STATUS>
              <UUID>420904FE-6a92-95e8-13f9-a37fc3607c14</UUID>
              <VCPU>1</VCPU>
              <VMTYPE>VMware</VMTYPE>
            </VIRTUALMACHINES>
          </CONTENT>
          <DEVICEID>ESX-03-DMZ.insep.fr-2023-02-02-11-34-53</DEVICEID>
          <QUERY>INVENTORY</QUERY>
        </REQUEST>
        ";

          //change config to import vms as computers
          $this->login();
          $conf = new \Glpi\Inventory\Conf();
          $this->boolean($conf->saveConf(['vm_as_computer' => 1]))->isTrue();
          $this->logout();

          //computer inventory knows bios
          $inventory = $this->doInventory($xml_source, true);

          $esx_id_first = $inventory->getItem()->fields['id'];
          $this->integer($esx_id_first)->isGreaterThan(0);

          //always one VM
          $vm = new \ComputerVirtualMachine();
          $this->array($vm->find())->hasSize(1);

          //get ComputervirtualMachine
          $vm_first = new \ComputerVirtualMachine();
          $this->boolean($vm_first->getFromDBByCrit([
              'uuid' => '420904fe-6a92-95e8-13f9-a37fc3607c14',
              'computers_id' => $esx_id_first
          ]))->isTrue();


          //get Computer
          $computer_linked_first = new \Computer();
          $this->boolean($computer_linked_first->getFromDBByCrit([
              'uuid' => '420904fe-6a92-95e8-13f9-a37fc3607c14',
          ]))->isTrue();

          $xml_source = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>
          <REQUEST>
            <CONTENT>
              <BIOS>
                <ASSETTAG></ASSETTAG>
                <BDATE>2018-02-08T00:00:00Z</BDATE>
                <BVERSION>1.3.7</BVERSION>
                <MSN>2YR88P2</MSN>
                <SMANUFACTURER>Dell Inc.</SMANUFACTURER>
                <SMODEL>PowerEdge R640</SMODEL>
                <SSN>2YR88P2</SSN>
              </BIOS>
              <CPUS>
                <CORE>10</CORE>
                <MANUFACTURER>Intel</MANUFACTURER>
                <NAME>Intel(R) Xeon(R) Gold 5115 CPU @ 2.40GHz</NAME>
                <SPEED>2394</SPEED>
                <THREAD>2</THREAD>
              </CPUS>
              <HARDWARE>
                <DNS>10.100.230.2/10.100.230.4</DNS>
                <MEMORY>130625</MEMORY>
                <NAME>ESX-03-DMZ</NAME>
                <UUID>8c8c8944-0074-5632-7452-b2c04f564712</UUID>
                <VMSYSTEM>Physical</VMSYSTEM>
                <WORKGROUP>teclib.fr</WORKGROUP>
              </HARDWARE>
              <NETWORKS>
                <DESCRIPTION>vmk0</DESCRIPTION>
                <IPADDRESS>10.100.240.66</IPADDRESS>
                <IPMASK>255.255.255.192</IPMASK>
                <MACADDR>80:18:44:f0:47:33</MACADDR>
                <MTU>1500</MTU>
                <STATUS>Up</STATUS>
                <VIRTUALDEV>1</VIRTUALDEV>
              </NETWORKS>
              <OPERATINGSYSTEM>
                <BOOT_TIME>2022-08-06 15:40:56</BOOT_TIME>
                <DNS_DOMAIN>insep.fr</DNS_DOMAIN>
                <FQDN>esx-03-dmz.teclib.fr</FQDN>
                <FULL_NAME>VMware ESXi 6.7.0 build-19195723</FULL_NAME>
                <NAME>VMware ESXi</NAME>
                <TIMEZONE>
                  <NAME>UTC</NAME>
                  <OFFSET>+0000</OFFSET>
                </TIMEZONE>
                <VERSION>6.7.0</VERSION>
              </OPERATINGSYSTEM>
              <VERSIONCLIENT>GLPI-Agent_v1.4-1</VERSIONCLIENT>
              <VIRTUALMACHINES>
                <COMMENT>Computer VM</COMMENT>
                <MAC>00:50:56:90:43:42</MAC>
                <MEMORY>1024</MEMORY>
                <NAME>SRV-DMZ-EZ</NAME>
                <STATUS>running</STATUS>
                <UUID>fe040942-926a-e895-13f9-a37fc3607c14</UUID>
                <VCPU>1</VCPU>
                <VMTYPE>VMware</VMTYPE>
              </VIRTUALMACHINES>
            </CONTENT>
            <DEVICEID>ESX-03-DMZ.insep.fr-2023-02-02-11-34-53</DEVICEID>
            <QUERY>INVENTORY</QUERY>
          </REQUEST>
          ";


          //redo inventory with different formatted UUID fe040942-926a-e895-13f9-a37fc3607c14
          $inventory = $this->doInventory($xml_source, true);

          $esx_id_second = $inventory->getItem()->fields['id'];
          $this->integer($esx_id_second)->isGreaterThan(0);

          $this->integer($esx_id_first)->isEqualTo($esx_id_second);

          //always one VM
          $vm = new \ComputerVirtualMachine();
          $this->array($vm->find())->hasSize(1);

          //get ComputervirtualMachine
          $vm_second = new \ComputerVirtualMachine();
          $this->boolean($vm_second->getFromDBByCrit([
              'uuid' => 'fe040942-926a-e895-13f9-a37fc3607c14',
              'computers_id' => $esx_id_second
          ]))->isTrue();

          //get Computer
          $computer_linked_second = new \Computer();
          $this->boolean($computer_linked_second->getFromDBByCrit([
              'uuid' => 'fe040942-926a-e895-13f9-a37fc3607c14',
          ]))->isTrue();

          //same VM and Computer
          $this->integer($vm_first->fields['id'])->isEqualTo($vm_second->fields['id']);
          $this->integer($computer_linked_first->fields['id'])->isEqualTo($computer_linked_second->fields['id']);
    }
}
