'use strict';

/**
 * Extends the given prototype with SoftLayer API service methods
 * @param proto The prototype of the API client
 */
module.exports = function(SoftLayer) {

    SoftLayer.prototype.account = function () {
        return this.path('Account');
    };
    SoftLayer.prototype.accountAddress = function () {
        return this.path('Account_Address');
    };
    SoftLayer.prototype.accountAddressType = function () {
        return this.path('Account_Address_Type');
    };
    SoftLayer.prototype.accountAffiliation = function () {
        return this.path('Account_Affiliation');
    };
    SoftLayer.prototype.accountAgreement = function () {
        return this.path('Account_Agreement');
    };
    SoftLayer.prototype.accountContact = function () {
        return this.path('Account_Contact');
    };
    SoftLayer.prototype.accountHistoricalReport = function () {
        return this.path('Account_Historical_Report');
    };
    SoftLayer.prototype.accountMasterServiceAgreement = function () {
        return this.path('Account_MasterServiceAgreement');
    };
    SoftLayer.prototype.accountMedia = function () {
        return this.path('Account_Media');
    };
    SoftLayer.prototype.accountMediaDataTransferRequest = function () {
        return this.path('Account_Media_Data_Transfer_Request');
    };
    SoftLayer.prototype.accountNote = function () {
        return this.path('Account_Note');
    };
    SoftLayer.prototype.accountNoteType = function () {
        return this.path('Account_Note_Type');
    };
    SoftLayer.prototype.accountPartnerReferralProspect = function () {
        return this.path('Account_Partner_Referral_Prospect');
    };
    SoftLayer.prototype.accountPassword = function () {
        return this.path('Account_Password');
    };
    SoftLayer.prototype.accountPasswordAuxiliary = function () {
        return this.path('Account_Password_Auxiliary');
    };
    SoftLayer.prototype.accountRegionalRegistryDetail = function () {
        return this.path('Account_Regional_Registry_Detail');
    };
    SoftLayer.prototype.accountRegionalRegistryDetailProperty = function () {
        return this.path('Account_Regional_Registry_Detail_Property');
    };
    SoftLayer.prototype.accountRegionalRegistryDetailPropertyType = function () {
        return this.path('Account_Regional_Registry_Detail_Property_Type');
    };
    SoftLayer.prototype.accountRegionalRegistryDetailType = function () {
        return this.path('Account_Regional_Registry_Detail_Type');
    };
    SoftLayer.prototype.accountReportsRequest = function () {
        return this.path('Account_Reports_Request');
    };
    SoftLayer.prototype.accountShipment = function () {
        return this.path('Account_Shipment');
    };
    SoftLayer.prototype.accountShipmentItem = function () {
        return this.path('Account_Shipment_Item');
    };
    SoftLayer.prototype.accountShipmentItemType = function () {
        return this.path('Account_Shipment_Item_Type');
    };
    SoftLayer.prototype.accountShipmentResourceType = function () {
        return this.path('Account_Shipment_Resource_Type');
    };
    SoftLayer.prototype.accountShipmentStatus = function () {
        return this.path('Account_Shipment_Status');
    };
    SoftLayer.prototype.accountShipmentTrackingData = function () {
        return this.path('Account_Shipment_Tracking_Data');
    };
    SoftLayer.prototype.accountShipmentType = function () {
        return this.path('Account_Shipment_Type');
    };
    SoftLayer.prototype.auxiliaryMarketingEvent = function () {
        return this.path('Auxiliary_Marketing_Event');
    };
    SoftLayer.prototype.auxiliaryNetworkStatus = function () {
        return this.path('Auxiliary_Network_Status');
    };
    SoftLayer.prototype.auxiliaryNotificationEmergency = function () {
        return this.path('Auxiliary_Notification_Emergency');
    };
    SoftLayer.prototype.auxiliaryPressRelease = function () {
        return this.path('Auxiliary_Press_Release');
    };
    SoftLayer.prototype.auxiliaryPressReleaseAbout = function () {
        return this.path('Auxiliary_Press_Release_About');
    };
    SoftLayer.prototype.auxiliaryPressReleaseAboutPressRelease = function () {
        return this.path('Auxiliary_Press_Release_About_Press_Release');
    };
    SoftLayer.prototype.auxiliaryPressReleaseContact = function () {
        return this.path('Auxiliary_Press_Release_Contact');
    };
    SoftLayer.prototype.auxiliaryPressReleaseContactPressRelease = function () {
        return this.path('Auxiliary_Press_Release_Contact_Press_Release');
    };
    SoftLayer.prototype.auxiliaryPressReleaseContent = function () {
        return this.path('Auxiliary_Press_Release_Content');
    };
    SoftLayer.prototype.auxiliaryPressReleaseMediaPartner = function () {
        return this.path('Auxiliary_Press_Release_Media_Partner');
    };
    SoftLayer.prototype.auxiliaryPressReleaseMediaPartnerPressRelease = function () {
        return this.path('Auxiliary_Press_Release_Media_Partner_Press_Release');
    };
    SoftLayer.prototype.auxiliaryShippingCourierType = function () {
        return this.path('Auxiliary_Shipping_Courier_Type');
    };
    SoftLayer.prototype.billingCurrency = function () {
        return this.path('Billing_Currency');
    };
    SoftLayer.prototype.billingCurrencyExchangeRate = function () {
        return this.path('Billing_Currency_ExchangeRate');
    };
    SoftLayer.prototype.billingInfo = function () {
        return this.path('Billing_Info');
    };
    SoftLayer.prototype.billingInvoice = function () {
        return this.path('Billing_Invoice');
    };
    SoftLayer.prototype.billingInvoiceItem = function () {
        return this.path('Billing_Invoice_Item');
    };
    SoftLayer.prototype.billingInvoiceTaxStatus = function () {
        return this.path('Billing_Invoice_Tax_Status');
    };
    SoftLayer.prototype.billingInvoiceTaxType = function () {
        return this.path('Billing_Invoice_Tax_Type');
    };
    SoftLayer.prototype.billingItem = function () {
        return this.path('Billing_Item');
    };
    SoftLayer.prototype.billingItemCancellationReason = function () {
        return this.path('Billing_Item_Cancellation_Reason');
    };
    SoftLayer.prototype.billingItemCancellationReasonCategory = function () {
        return this.path('Billing_Item_Cancellation_Reason_Category');
    };
    SoftLayer.prototype.billingItemCancellationRequest = function () {
        return this.path('Billing_Item_Cancellation_Request');
    };
    SoftLayer.prototype.billingOrder = function () {
        return this.path('Billing_Order');
    };
    SoftLayer.prototype.billingOrderCart = function () {
        return this.path('Billing_Order_Cart');
    };
    SoftLayer.prototype.billingOrderItem = function () {
        return this.path('Billing_Order_Item');
    };
    SoftLayer.prototype.billingOrderQuote = function () {
        return this.path('Billing_Order_Quote');
    };
    SoftLayer.prototype.brand = function () {
        return this.path('Brand');
    };
    SoftLayer.prototype.catalystEnrollment = function () {
        return this.path('Catalyst_Enrollment');
    };
    SoftLayer.prototype.configurationStorageGroupArrayType = function () {
        return this.path('Configuration_Storage_Group_Array_Type');
    };
    SoftLayer.prototype.configurationTemplate = function () {
        return this.path('Configuration_Template');
    };
    SoftLayer.prototype.configurationTemplateSection = function () {
        return this.path('Configuration_Template_Section');
    };
    SoftLayer.prototype.configurationTemplateSectionDefinition = function () {
        return this.path('Configuration_Template_Section_Definition');
    };
    SoftLayer.prototype.configurationTemplateSectionDefinitionGroup = function () {
        return this.path('Configuration_Template_Section_Definition_Group');
    };
    SoftLayer.prototype.configurationTemplateSectionDefinitionType = function () {
        return this.path('Configuration_Template_Section_Definition_Type');
    };
    SoftLayer.prototype.configurationTemplateSectionDefinitionValue = function () {
        return this.path('Configuration_Template_Section_Definition_Value');
    };
    SoftLayer.prototype.configurationTemplateSectionProfile = function () {
        return this.path('Configuration_Template_Section_Profile');
    };
    SoftLayer.prototype.configurationTemplateSectionReference = function () {
        return this.path('Configuration_Template_Section_Reference');
    };
    SoftLayer.prototype.configurationTemplateSectionType = function () {
        return this.path('Configuration_Template_Section_Type');
    };
    SoftLayer.prototype.configurationTemplateType = function () {
        return this.path('Configuration_Template_Type');
    };
    SoftLayer.prototype.dnsDomain = function () {
        return this.path('Dns_Domain');
    };
    SoftLayer.prototype.dnsDomainRegistration = function () {
        return this.path('Dns_Domain_Registration');
    };
    SoftLayer.prototype.dnsDomainRegistrationStatus = function () {
        return this.path('Dns_Domain_Registration_Status');
    };
    SoftLayer.prototype.dnsDomainResourceRecord = function () {
        return this.path('Dns_Domain_ResourceRecord');
    };
    SoftLayer.prototype.dnsDomainResourceRecordMxType = function () {
        return this.path('Dns_Domain_ResourceRecord_MxType');
    };
    SoftLayer.prototype.dnsDomainResourceRecordSrvType = function () {
        return this.path('Dns_Domain_ResourceRecord_SrvType');
    };
    SoftLayer.prototype.dnsSecondary = function () {
        return this.path('Dns_Secondary');
    };
    SoftLayer.prototype.eventLog = function () {
        return this.path('Event_Log');
    };
    SoftLayer.prototype.hardware = function () {
        return this.path('Hardware');
    };
    SoftLayer.prototype.hardwareBenchmarkCertification = function () {
        return this.path('Hardware_Benchmark_Certification');
    };
    SoftLayer.prototype.hardwareComponentModel = function () {
        return this.path('Hardware_Component_Model');
    };
    SoftLayer.prototype.hardwareComponentPartitionOperatingSystem = function () {
        return this.path('Hardware_Component_Partition_OperatingSystem');
    };
    SoftLayer.prototype.hardwareComponentPartitionTemplate = function () {
        return this.path('Hardware_Component_Partition_Template');
    };
    SoftLayer.prototype.hardwareRouter = function () {
        return this.path('Hardware_Router');
    };
    SoftLayer.prototype.hardwareServer = function () {
        return this.path('Hardware_Server');
    };
    SoftLayer.prototype.layoutContainer = function () {
        return this.path('Layout_Container');
    };
    SoftLayer.prototype.layoutItem = function () {
        return this.path('Layout_Item');
    };
    SoftLayer.prototype.layoutProfile = function () {
        return this.path('Layout_Profile');
    };
    SoftLayer.prototype.layoutProfileContainers = function () {
        return this.path('Layout_Profile_Containers');
    };
    SoftLayer.prototype.layoutProfileCustomer = function () {
        return this.path('Layout_Profile_Customer');
    };
    SoftLayer.prototype.layoutProfilePreference = function () {
        return this.path('Layout_Profile_Preference');
    };
    SoftLayer.prototype.localeTimezone = function () {
        return this.path('Locale_Timezone');
    };
    SoftLayer.prototype.location = function () {
        return this.path('Location');
    };
    SoftLayer.prototype.locationDatacenter = function () {
        return this.path('Location_Datacenter');
    };
    SoftLayer.prototype.locationGroup = function () {
        return this.path('Location_Group');
    };
    SoftLayer.prototype.locationGroupLocationCrossReference = function () {
        return this.path('Location_Group_Location_CrossReference');
    };
    SoftLayer.prototype.locationGroupPricing = function () {
        return this.path('Location_Group_Pricing');
    };
    SoftLayer.prototype.locationGroupRegional = function () {
        return this.path('Location_Group_Regional');
    };
    SoftLayer.prototype.locationGroupType = function () {
        return this.path('Location_Group_Type');
    };
    SoftLayer.prototype.locationReservation = function () {
        return this.path('Location_Reservation');
    };
    SoftLayer.prototype.locationReservationRack = function () {
        return this.path('Location_Reservation_Rack');
    };
    SoftLayer.prototype.locationReservationRackMember = function () {
        return this.path('Location_Reservation_Rack_Member');
    };
    SoftLayer.prototype.marketplacePartner = function () {
        return this.path('Marketplace_Partner');
    };
    SoftLayer.prototype.metricTrackingObject = function () {
        return this.path('Metric_Tracking_Object');
    };
    SoftLayer.prototype.metricTrackingObjectBandwidthSummary = function () {
        return this.path('Metric_Tracking_Object_Bandwidth_Summary');
    };
    SoftLayer.prototype.monitoringAgent = function () {
        return this.path('Monitoring_Agent');
    };
    SoftLayer.prototype.monitoringAgentConfigurationTemplateGroup = function () {
        return this.path('Monitoring_Agent_Configuration_Template_Group');
    };
    SoftLayer.prototype.monitoringAgentConfigurationTemplateGroupReference = function () {
        return this.path('Monitoring_Agent_Configuration_Template_Group_Reference');
    };
    SoftLayer.prototype.monitoringAgentConfigurationValue = function () {
        return this.path('Monitoring_Agent_Configuration_Value');
    };
    SoftLayer.prototype.monitoringAgentStatus = function () {
        return this.path('Monitoring_Agent_Status');
    };
    SoftLayer.prototype.monitoringRobot = function () {
        return this.path('Monitoring_Robot');
    };
    SoftLayer.prototype.networkApplicationDeliveryController = function () {
        return this.path('Network_Application_Delivery_Controller');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerConfigurationHistory = function () {
        return this.path('Network_Application_Delivery_Controller_Configuration_History');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerHealthAttribute = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Health_Attribute');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerHealthAttributeType = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Health_Attribute_Type');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerHealthCheck = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Health_Check');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerHealthCheckType = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Health_Check_Type');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerRoutingMethod = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Routing_Method');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerRoutingType = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Routing_Type');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerService = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Service');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerServiceGroup = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_Service_Group');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerVirtualIpAddress = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_VirtualIpAddress');
    };
    SoftLayer.prototype.networkApplicationDeliveryControllerLoadBalancerVirtualServer = function () {
        return this.path('Network_Application_Delivery_Controller_LoadBalancer_VirtualServer');
    };
    SoftLayer.prototype.networkBackbone = function () {
        return this.path('Network_Backbone');
    };
    SoftLayer.prototype.networkBackboneLocationDependent = function () {
        return this.path('Network_Backbone_Location_Dependent');
    };
    SoftLayer.prototype.networkBandwidthVersion1Allotment = function () {
        return this.path('Network_Bandwidth_Version1_Allotment');
    };
    SoftLayer.prototype.networkComponent = function () {
        return this.path('Network_Component');
    };
    SoftLayer.prototype.networkComponentFirewall = function () {
        return this.path('Network_Component_Firewall');
    };
    SoftLayer.prototype.networkContentDeliveryAccount = function () {
        return this.path('Network_ContentDelivery_Account');
    };
    SoftLayer.prototype.networkContentDeliveryAuthenticationAddress = function () {
        return this.path('Network_ContentDelivery_Authentication_Address');
    };
    SoftLayer.prototype.networkContentDeliveryAuthenticationToken = function () {
        return this.path('Network_ContentDelivery_Authentication_Token');
    };
    SoftLayer.prototype.networkCustomerSubnet = function () {
        return this.path('Network_Customer_Subnet');
    };
    SoftLayer.prototype.networkFirewallAccessControlList = function () {
        return this.path('Network_Firewall_AccessControlList');
    };
    SoftLayer.prototype.networkFirewallInterface = function () {
        return this.path('Network_Firewall_Interface');
    };
    SoftLayer.prototype.networkFirewallModuleContextInterface = function () {
        return this.path('Network_Firewall_Module_Context_Interface');
    };
    SoftLayer.prototype.networkFirewallTemplate = function () {
        return this.path('Network_Firewall_Template');
    };
    SoftLayer.prototype.networkFirewallUpdateRequest = function () {
        return this.path('Network_Firewall_Update_Request');
    };
    SoftLayer.prototype.networkFirewallUpdateRequestRule = function () {
        return this.path('Network_Firewall_Update_Request_Rule');
    };
    SoftLayer.prototype.networkGateway = function () {
        return this.path('Network_Gateway');
    };
    SoftLayer.prototype.networkGatewayMember = function () {
        return this.path('Network_Gateway_Member');
    };
    SoftLayer.prototype.networkGatewayStatus = function () {
        return this.path('Network_Gateway_Status');
    };
    SoftLayer.prototype.networkGatewayVlan = function () {
        return this.path('Network_Gateway_Vlan');
    };
    SoftLayer.prototype.networkLoadBalancerGlobalAccount = function () {
        return this.path('Network_LoadBalancer_Global_Account');
    };
    SoftLayer.prototype.networkLoadBalancerGlobalHost = function () {
        return this.path('Network_LoadBalancer_Global_Host');
    };
    SoftLayer.prototype.networkLoadBalancerService = function () {
        return this.path('Network_LoadBalancer_Service');
    };
    SoftLayer.prototype.networkLoadBalancerVirtualIpAddress = function () {
        return this.path('Network_LoadBalancer_VirtualIpAddress');
    };
    SoftLayer.prototype.networkMediaTranscodeAccount = function () {
        return this.path('Network_Media_Transcode_Account');
    };
    SoftLayer.prototype.networkMediaTranscodeJob = function () {
        return this.path('Network_Media_Transcode_Job');
    };
    SoftLayer.prototype.networkMediaTranscodeJobStatus = function () {
        return this.path('Network_Media_Transcode_Job_Status');
    };
    SoftLayer.prototype.networkMessageDelivery = function () {
        return this.path('Network_Message_Delivery');
    };
    SoftLayer.prototype.networkMessageDeliveryEmailSendgrid = function () {
        return this.path('Network_Message_Delivery_Email_Sendgrid');
    };
    SoftLayer.prototype.networkMessageQueue = function () {
        return this.path('Network_Message_Queue');
    };
    SoftLayer.prototype.networkMessageQueueNode = function () {
        return this.path('Network_Message_Queue_Node');
    };
    SoftLayer.prototype.networkMessageQueueStatus = function () {
        return this.path('Network_Message_Queue_Status');
    };
    SoftLayer.prototype.networkMonitorVersion1QueryHost = function () {
        return this.path('Network_Monitor_Version1_Query_Host');
    };
    SoftLayer.prototype.networkMonitorVersion1QueryHostStratum = function () {
        return this.path('Network_Monitor_Version1_Query_Host_Stratum');
    };
    SoftLayer.prototype.networkSecurityScannerRequest = function () {
        return this.path('Network_Security_Scanner_Request');
    };
    SoftLayer.prototype.networkServiceVpnOverrides = function () {
        return this.path('Network_Service_Vpn_Overrides');
    };
    SoftLayer.prototype.networkStorage = function () {
        return this.path('Network_Storage');
    };
    SoftLayer.prototype.networkStorageAllowedHost = function () {
        return this.path('Network_Storage_Allowed_Host');
    };
    SoftLayer.prototype.networkStorageBackupEvault = function () {
        return this.path('Network_Storage_Backup_Evault');
    };
    SoftLayer.prototype.networkStorageGroup = function () {
        return this.path('Network_Storage_Group');
    };
    SoftLayer.prototype.networkStorageGroupIscsi = function () {
        return this.path('Network_Storage_Group_Iscsi');
    };
    SoftLayer.prototype.networkStorageGroupNfs = function () {
        return this.path('Network_Storage_Group_Nfs');
    };
    SoftLayer.prototype.networkStorageGroupType = function () {
        return this.path('Network_Storage_Group_Type');
    };
    SoftLayer.prototype.networkStorageHubSwiftShare = function () {
        return this.path('Network_Storage_Hub_Swift_Share');
    };
    SoftLayer.prototype.networkStorageIscsi = function () {
        return this.path('Network_Storage_Iscsi');
    };
    SoftLayer.prototype.networkStorageIscsiOSType = function () {
        return this.path('Network_Storage_Iscsi_OS_Type');
    };
    SoftLayer.prototype.networkStorageSchedule = function () {
        return this.path('Network_Storage_Schedule');
    };
    SoftLayer.prototype.networkStorageSchedulePropertyType = function () {
        return this.path('Network_Storage_Schedule_Property_Type');
    };
    SoftLayer.prototype.networkSubnet = function () {
        return this.path('Network_Subnet');
    };
    SoftLayer.prototype.networkSubnetIpAddress = function () {
        return this.path('Network_Subnet_IpAddress');
    };
    SoftLayer.prototype.networkSubnetIpAddressGlobal = function () {
        return this.path('Network_Subnet_IpAddress_Global');
    };
    SoftLayer.prototype.networkSubnetRegistration = function () {
        return this.path('Network_Subnet_Registration');
    };
    SoftLayer.prototype.networkSubnetRegistrationDetails = function () {
        return this.path('Network_Subnet_Registration_Details');
    };
    SoftLayer.prototype.networkSubnetRegistrationStatus = function () {
        return this.path('Network_Subnet_Registration_Status');
    };
    SoftLayer.prototype.networkSubnetRwhoisData = function () {
        return this.path('Network_Subnet_Rwhois_Data');
    };
    SoftLayer.prototype.networkSubnetSwipTransaction = function () {
        return this.path('Network_Subnet_Swip_Transaction');
    };
    SoftLayer.prototype.networkTippingPointReporting = function () {
        return this.path('Network_TippingPointReporting');
    };
    SoftLayer.prototype.networkTunnelModuleContext = function () {
        return this.path('Network_Tunnel_Module_Context');
    };
    SoftLayer.prototype.networkVlan = function () {
        return this.path('Network_Vlan');
    };
    SoftLayer.prototype.networkVlanFirewall = function () {
        return this.path('Network_Vlan_Firewall');
    };
    SoftLayer.prototype.networkVlanType = function () {
        return this.path('Network_Vlan_Type');
    };
    SoftLayer.prototype.networkVrf = function () {
        return this.path('Network_Vrf');
    };
    SoftLayer.prototype.notification = function () {
        return this.path('Notification');
    };
    SoftLayer.prototype.notificationMobile = function () {
        return this.path('Notification_Mobile');
    };
    SoftLayer.prototype.notificationOccurrenceEvent = function () {
        return this.path('Notification_Occurrence_Event');
    };
    SoftLayer.prototype.notificationOccurrenceUser = function () {
        return this.path('Notification_Occurrence_User');
    };
    SoftLayer.prototype.notificationUserSubscriber = function () {
        return this.path('Notification_User_Subscriber');
    };
    SoftLayer.prototype.notificationUserSubscriberBilling = function () {
        return this.path('Notification_User_Subscriber_Billing');
    };
    SoftLayer.prototype.notificationUserSubscriberMobile = function () {
        return this.path('Notification_User_Subscriber_Mobile');
    };
    SoftLayer.prototype.notificationUserSubscriberPreference = function () {
        return this.path('Notification_User_Subscriber_Preference');
    };
    SoftLayer.prototype.productItemCategory = function () {
        return this.path('Product_Item_Category');
    };
    SoftLayer.prototype.productItemCategoryGroup = function () {
        return this.path('Product_Item_Category_Group');
    };
    SoftLayer.prototype.productItemPrice = function () {
        return this.path('Product_Item_Price');
    };
    SoftLayer.prototype.productItemPricePremium = function () {
        return this.path('Product_Item_Price_Premium');
    };
    SoftLayer.prototype.productOrder = function () {
        return this.path('Product_Order');
    };
    SoftLayer.prototype.productOrderPartitionTemplateOperatingSystem = function () {
        return this.path('Product_Order_Partition_Template_OperatingSystem');
    };
    SoftLayer.prototype.productPackage = function () {
        return this.path('Product_Package');
    };
    SoftLayer.prototype.productPackagePreset = function () {
        return this.path('Product_Package_Preset');
    };
    SoftLayer.prototype.productPackageServer = function () {
        return this.path('Product_Package_Server');
    };
    SoftLayer.prototype.productPackageServerOption = function () {
        return this.path('Product_Package_Server_Option');
    };
    SoftLayer.prototype.productPackageType = function () {
        return this.path('Product_Package_Type');
    };
    SoftLayer.prototype.productUpgradeRequest = function () {
        return this.path('Product_Upgrade_Request');
    };
    SoftLayer.prototype.provisioningHook = function () {
        return this.path('Provisioning_Hook');
    };
    SoftLayer.prototype.provisioningHookType = function () {
        return this.path('Provisioning_Hook_Type');
    };
    SoftLayer.prototype.provisioningMaintenanceClassification = function () {
        return this.path('Provisioning_Maintenance_Classification');
    };
    SoftLayer.prototype.provisioningMaintenanceClassificationItemCategory = function () {
        return this.path('Provisioning_Maintenance_Classification_Item_Category');
    };
    SoftLayer.prototype.provisioningMaintenanceSlots = function () {
        return this.path('Provisioning_Maintenance_Slots');
    };
    SoftLayer.prototype.provisioningMaintenanceTicket = function () {
        return this.path('Provisioning_Maintenance_Ticket');
    };
    SoftLayer.prototype.provisioningMaintenanceWindow = function () {
        return this.path('Provisioning_Maintenance_Window');
    };
    SoftLayer.prototype.provisioningVersion1TransactionGroup = function () {
        return this.path('Provisioning_Version1_Transaction_Group');
    };
    SoftLayer.prototype.resourceGroup = function () {
        return this.path('Resource_Group');
    };
    SoftLayer.prototype.resourceGroupTemplate = function () {
        return this.path('Resource_Group_Template');
    };
    SoftLayer.prototype.resourceMetadata = function () {
        return this.path('Resource_Metadata');
    };
    SoftLayer.prototype.salesPresaleEvent = function () {
        return this.path('Sales_Presale_Event');
    };
    SoftLayer.prototype.scaleAsset = function () {
        return this.path('Scale_Asset');
    };
    SoftLayer.prototype.scaleAssetHardware = function () {
        return this.path('Scale_Asset_Hardware');
    };
    SoftLayer.prototype.scaleAssetVirtualGuest = function () {
        return this.path('Scale_Asset_Virtual_Guest');
    };
    SoftLayer.prototype.scaleGroup = function () {
        return this.path('Scale_Group');
    };
    SoftLayer.prototype.scaleGroupStatus = function () {
        return this.path('Scale_Group_Status');
    };
    SoftLayer.prototype.scaleLoadBalancer = function () {
        return this.path('Scale_LoadBalancer');
    };
    SoftLayer.prototype.scaleMember = function () {
        return this.path('Scale_Member');
    };
    SoftLayer.prototype.scaleMemberVirtualGuest = function () {
        return this.path('Scale_Member_Virtual_Guest');
    };
    SoftLayer.prototype.scaleNetworkVlan = function () {
        return this.path('Scale_Network_Vlan');
    };
    SoftLayer.prototype.scalePolicy = function () {
        return this.path('Scale_Policy');
    };
    SoftLayer.prototype.scalePolicyAction = function () {
        return this.path('Scale_Policy_Action');
    };
    SoftLayer.prototype.scalePolicyActionScale = function () {
        return this.path('Scale_Policy_Action_Scale');
    };
    SoftLayer.prototype.scalePolicyActionType = function () {
        return this.path('Scale_Policy_Action_Type');
    };
    SoftLayer.prototype.scalePolicyTrigger = function () {
        return this.path('Scale_Policy_Trigger');
    };
    SoftLayer.prototype.scalePolicyTriggerOneTime = function () {
        return this.path('Scale_Policy_Trigger_OneTime');
    };
    SoftLayer.prototype.scalePolicyTriggerRepeating = function () {
        return this.path('Scale_Policy_Trigger_Repeating');
    };
    SoftLayer.prototype.scalePolicyTriggerResourceUse = function () {
        return this.path('Scale_Policy_Trigger_ResourceUse');
    };
    SoftLayer.prototype.scalePolicyTriggerResourceUseWatch = function () {
        return this.path('Scale_Policy_Trigger_ResourceUse_Watch');
    };
    SoftLayer.prototype.scalePolicyTriggerType = function () {
        return this.path('Scale_Policy_Trigger_Type');
    };
    SoftLayer.prototype.scaleTerminationPolicy = function () {
        return this.path('Scale_Termination_Policy');
    };
    SoftLayer.prototype.search = function () {
        return this.path('Search');
    };
    SoftLayer.prototype.securityCertificate = function () {
        return this.path('Security_Certificate');
    };
    SoftLayer.prototype.securityCertificateRequest = function () {
        return this.path('Security_Certificate_Request');
    };
    SoftLayer.prototype.securityCertificateRequestServerType = function () {
        return this.path('Security_Certificate_Request_ServerType');
    };
    SoftLayer.prototype.securityCertificateRequestStatus = function () {
        return this.path('Security_Certificate_Request_Status');
    };
    SoftLayer.prototype.securitySshKey = function () {
        return this.path('Security_Ssh_Key');
    };
    SoftLayer.prototype.softwareComponent = function () {
        return this.path('Software_Component');
    };
    SoftLayer.prototype.softwareComponentAntivirusSpyware = function () {
        return this.path('Software_Component_AntivirusSpyware');
    };
    SoftLayer.prototype.softwareComponentHostIps = function () {
        return this.path('Software_Component_HostIps');
    };
    SoftLayer.prototype.softwareComponentPassword = function () {
        return this.path('Software_Component_Password');
    };
    SoftLayer.prototype.softwareDescription = function () {
        return this.path('Software_Description');
    };
    SoftLayer.prototype.softwareVirtualLicense = function () {
        return this.path('Software_VirtualLicense');
    };
    SoftLayer.prototype.survey = function () {
        return this.path('Survey');
    };
    SoftLayer.prototype.tag = function () {
        return this.path('Tag');
    };
    SoftLayer.prototype.ticket = function () {
        return this.path('Ticket');
    };
    SoftLayer.prototype.ticketSubject = function () {
        return this.path('Ticket_Subject');
    };
    SoftLayer.prototype.ticketUpdateEmployee = function () {
        return this.path('Ticket_Update_Employee');
    };
    SoftLayer.prototype.userCustomer = function () {
        return this.path('User_Customer');
    };
    SoftLayer.prototype.userCustomerApiAuthentication = function () {
        return this.path('User_Customer_ApiAuthentication');
    };
    SoftLayer.prototype.userCustomerCustomerPermissionPermission = function () {
        return this.path('User_Customer_CustomerPermission_Permission');
    };
    SoftLayer.prototype.userCustomerExternalBinding = function () {
        return this.path('User_Customer_External_Binding');
    };
    SoftLayer.prototype.userCustomerExternalBindingPhone = function () {
        return this.path('User_Customer_External_Binding_Phone');
    };
    SoftLayer.prototype.userCustomerExternalBindingTotp = function () {
        return this.path('User_Customer_External_Binding_Totp');
    };
    SoftLayer.prototype.userCustomerExternalBindingVendor = function () {
        return this.path('User_Customer_External_Binding_Vendor');
    };
    SoftLayer.prototype.userCustomerExternalBindingVerisign = function () {
        return this.path('User_Customer_External_Binding_Verisign');
    };
    SoftLayer.prototype.userCustomerMobileDevice = function () {
        return this.path('User_Customer_MobileDevice');
    };
    SoftLayer.prototype.userCustomerMobileDeviceOperatingSystem = function () {
        return this.path('User_Customer_MobileDevice_OperatingSystem');
    };
    SoftLayer.prototype.userCustomerMobileDeviceType = function () {
        return this.path('User_Customer_MobileDevice_Type');
    };
    SoftLayer.prototype.userCustomerNotificationHardware = function () {
        return this.path('User_Customer_Notification_Hardware');
    };
    SoftLayer.prototype.userCustomerNotificationVirtualGuest = function () {
        return this.path('User_Customer_Notification_Virtual_Guest');
    };
    SoftLayer.prototype.userCustomerSecurityAnswer = function () {
        return this.path('User_Customer_Security_Answer');
    };
    SoftLayer.prototype.userCustomerStatus = function () {
        return this.path('User_Customer_Status');
    };
    SoftLayer.prototype.userExternalBinding = function () {
        return this.path('User_External_Binding');
    };
    SoftLayer.prototype.userExternalBindingVendor = function () {
        return this.path('User_External_Binding_Vendor');
    };
    SoftLayer.prototype.userPermissionAction = function () {
        return this.path('User_Permission_Action');
    };
    SoftLayer.prototype.userPermissionGroup = function () {
        return this.path('User_Permission_Group');
    };
    SoftLayer.prototype.userPermissionGroupType = function () {
        return this.path('User_Permission_Group_Type');
    };
    SoftLayer.prototype.userPermissionRole = function () {
        return this.path('User_Permission_Role');
    };
    SoftLayer.prototype.userSecurityQuestion = function () {
        return this.path('User_Security_Question');
    };
    SoftLayer.prototype.utilityNetwork = function () {
        return this.path('Utility_Network');
    };
    SoftLayer.prototype.virtualDiskImage = function () {
        return this.path('Virtual_Disk_Image');
    };
    SoftLayer.prototype.virtualGuest = function () {
        return this.path('Virtual_Guest');
    };
    SoftLayer.prototype.virtualGuestBlockDeviceTemplateGroup = function () {
        return this.path('Virtual_Guest_Block_Device_Template_Group');
    };
    SoftLayer.prototype.virtualGuestBootParameter = function () {
        return this.path('Virtual_Guest_Boot_Parameter');
    };
    SoftLayer.prototype.virtualGuestBootParameterType = function () {
        return this.path('Virtual_Guest_Boot_Parameter_Type');
    };
    SoftLayer.prototype.virtualGuestNetworkComponent = function () {
        return this.path('Virtual_Guest_Network_Component');
    };
    SoftLayer.prototype.virtualHost = function () {
        return this.path('Virtual_Host');
    };
    SoftLayer.prototype.virtualStorageRepository = function () {
        return this.path('Virtual_Storage_Repository');
    };
};
