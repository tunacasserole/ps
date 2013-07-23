Ext.define('Ps.view.cases.Explorer', {

  extend : 'Buildit.ux.explorer.Panel',
  alias  : 'widget.ps-cases-Explorer',

  // EXPLORER INIT (Start) ===============================================================
  store  : Ext.create('Ps.store.Case'),

  contextMenuConfig : {
    xtype    : 'ps-cases-ExplorerContextMenu'
  },

  newForms : [{
    xtype    : 'ps-cases-Form'
  }],

  inspectorConfig : {
    xtype    : 'ps-cases-Inspector'
  },
  // EXPLORER INIT (End)

  // LABELS (Start) ======================================================================
  case_idLabel:                           Ps.i18n.model.Case.case_id,
  business_unitLabel:                     Ps.i18n.model.Case.business_unit,
  disp_tmpl_fam_cdLabel:                  Ps.i18n.model.Case.disp_tmpl_fam_cd,
  rc_verticalLabel:                       Ps.i18n.model.Case.rc_vertical,
  marketLabel:                            Ps.i18n.model.Case.market,
  case_typeLabel:                         Ps.i18n.model.Case.case_type,
  person_pinLabel:                        Ps.i18n.model.Case.person_pin,
  sinLabel:                               Ps.i18n.model.Case.sin,
  case_contactLabel:                      Ps.i18n.model.Case.case_contact,
  bo_id_custLabel:                        Ps.i18n.model.Case.bo_id_cust,
  role_type_id_custLabel:                 Ps.i18n.model.Case.role_type_id_cust,
  role_type_id_cntctLabel:                Ps.i18n.model.Case.role_type_id_cntct,
  bo_id_siteLabel:                        Ps.i18n.model.Case.bo_id_site,
  role_type_id_siteLabel:                 Ps.i18n.model.Case.role_type_id_site,
  bo_id_contactLabel:                     Ps.i18n.model.Case.bo_id_contact,
  bo_id_alt_cnctLabel:                    Ps.i18n.model.Case.bo_id_alt_cnct,
  bo_id_partnerLabel:                     Ps.i18n.model.Case.bo_id_partner,
  role_type_id_partLabel:                 Ps.i18n.model.Case.role_type_id_part,
  bo_id_part_contLabel:                   Ps.i18n.model.Case.bo_id_part_cont,
  role_type_id_partcLabel:                Ps.i18n.model.Case.role_type_id_partc,
  bo_id_reported_byLabel:                 Ps.i18n.model.Case.bo_id_reported_by,
  role_type_id_rptbyLabel:                Ps.i18n.model.Case.role_type_id_rptby,
  bo_id_cust_intLabel:                    Ps.i18n.model.Case.bo_id_cust_int,
  bo_id_contact_intLabel:                 Ps.i18n.model.Case.bo_id_contact_int,
  bo_id_bill_intLabel:                    Ps.i18n.model.Case.bo_id_bill_int,
  bo_id_cnt_bill_intLabel:                Ps.i18n.model.Case.bo_id_cnt_bill_int,
  profile_cm_sld_intLabel:                Ps.i18n.model.Case.profile_cm_sld_int,
  profile_cm_bil_intLabel:                Ps.i18n.model.Case.profile_cm_bil_int,
  deptidLabel:                            Ps.i18n.model.Case.deptid,
  locationLabel:                          Ps.i18n.model.Case.location,
  agreement_codeLabel:                    Ps.i18n.model.Case.agreement_code,
  agr_renewal_numLabel:                   Ps.i18n.model.Case.agr_renewal_num,
  agreement_lineLabel:                    Ps.i18n.model.Case.agreement_line,
  warranty_nameLabel:                     Ps.i18n.model.Case.warranty_name,
  rc_pay_for_svc_flgLabel:                Ps.i18n.model.Case.rc_pay_for_svc_flg,
  inst_prod_idLabel:                      Ps.i18n.model.Case.inst_prod_id,
  product_groupLabel:                     Ps.i18n.model.Case.product_group,
  product_idLabel:                        Ps.i18n.model.Case.product_id,
  serial_idLabel:                         Ps.i18n.model.Case.serial_id,
  assettagLabel:                          Ps.i18n.model.Case.assettag,
  distributor_idLabel:                    Ps.i18n.model.Case.distributor_id,
  rc_sourceLabel:                         Ps.i18n.model.Case.rc_source,
  rc_contact_methodLabel:                 Ps.i18n.model.Case.rc_contact_method,
  rc_contact_infoLabel:                   Ps.i18n.model.Case.rc_contact_info,
  cm_type_idLabel:                        Ps.i18n.model.Case.cm_type_id,
  cm_idLabel:                             Ps.i18n.model.Case.cm_id,
  rb_location_detailLabel:                Ps.i18n.model.Case.rb_location_detail,
  profile_cm_seq_addLabel:                Ps.i18n.model.Case.profile_cm_seq_add,
  profile_cm_seq_phnLabel:                Ps.i18n.model.Case.profile_cm_seq_phn,
  profile_cm_seq_pgrLabel:                Ps.i18n.model.Case.profile_cm_seq_pgr,
  profile_cm_seq_emlLabel:                Ps.i18n.model.Case.profile_cm_seq_eml,
  region_idLabel:                         Ps.i18n.model.Case.region_id,
  provider_grp_idLabel:                   Ps.i18n.model.Case.provider_grp_id,
  assigned_toLabel:                       Ps.i18n.model.Case.assigned_to,
  prior_prvdr_grp_idLabel:                Ps.i18n.model.Case.prior_prvdr_grp_id,
  prior_assigned_toLabel:                 Ps.i18n.model.Case.prior_assigned_to,
  rc_statusLabel:                         Ps.i18n.model.Case.rc_status,
  rc_priorityLabel:                       Ps.i18n.model.Case.rc_priority,
  rc_impactLabel:                         Ps.i18n.model.Case.rc_impact,
  urgencyLabel:                           Ps.i18n.model.Case.urgency,
  rc_severityLabel:                       Ps.i18n.model.Case.rc_severity,
  bus_proc_instanceLabel:                 Ps.i18n.model.Case.bus_proc_instance,
  rc_categoryLabel:                       Ps.i18n.model.Case.rc_category,
  rc_typeLabel:                           Ps.i18n.model.Case.rc_type,
  rc_detailLabel:                         Ps.i18n.model.Case.rc_detail,
  problem_typeLabel:                      Ps.i18n.model.Case.problem_type,
  rc_first_contactLabel:                  Ps.i18n.model.Case.rc_first_contact,
  res_first_cntctLabel:                   Ps.i18n.model.Case.res_first_cntct,
  creation_dateLabel:                     Ps.i18n.model.Case.creation_date,
  closed_dateLabel:                       Ps.i18n.model.Case.closed_date,
  closed_dttmLabel:                       Ps.i18n.model.Case.closed_dttm,
  closed_by_opridLabel:                   Ps.i18n.model.Case.closed_by_oprid,
  rc_summaryLabel:                        Ps.i18n.model.Case.rc_summary,
  rc_tracking_nbrLabel:                   Ps.i18n.model.Case.rc_tracking_nbr,
  error_idLabel:                          Ps.i18n.model.Case.error_id,
  rc_reopn_reason_cdLabel:                Ps.i18n.model.Case.rc_reopn_reason_cd,
  rc_close_reason_cdLabel:                Ps.i18n.model.Case.rc_close_reason_cd,
  error_codeLabel:                        Ps.i18n.model.Case.error_code,
  error_messageLabel:                     Ps.i18n.model.Case.error_message,
  rc_resp_dateLabel:                      Ps.i18n.model.Case.rc_resp_date,
  rc_resp_timeLabel:                      Ps.i18n.model.Case.rc_resp_time,
  rc_respmet_dateLabel:                   Ps.i18n.model.Case.rc_respmet_date,
  rc_respmet_timeLabel:                   Ps.i18n.model.Case.rc_respmet_time,
  rc_resp_indLabel:                       Ps.i18n.model.Case.rc_resp_ind,
  rc_rest_dateLabel:                      Ps.i18n.model.Case.rc_rest_date,
  rc_rest_timeLabel:                      Ps.i18n.model.Case.rc_rest_time,
  rc_restmet_dateLabel:                   Ps.i18n.model.Case.rc_restmet_date,
  rc_restmet_timeLabel:                   Ps.i18n.model.Case.rc_restmet_time,
  rc_rest_indLabel:                       Ps.i18n.model.Case.rc_rest_ind,
  remote_case_idLabel:                    Ps.i18n.model.Case.remote_case_id,
  rb_anonymous_flagLabel:                 Ps.i18n.model.Case.rb_anonymous_flag,
  rb_site_nocust_flgLabel:                Ps.i18n.model.Case.rb_site_nocust_flg,
  secure_case_flgLabel:                   Ps.i18n.model.Case.secure_case_flg,
  global_flagLabel:                       Ps.i18n.model.Case.global_flag,
  case_subtypeLabel:                      Ps.i18n.model.Case.case_subtype,
  case_visibilityLabel:                   Ps.i18n.model.Case.case_visibility,
  fin_account_idLabel:                    Ps.i18n.model.Case.fin_account_id,
  target_close_dateLabel:                 Ps.i18n.model.Case.target_close_date,
  sales_entry_idLabel:                    Ps.i18n.model.Case.sales_entry_id,
  transaction_noLabel:                    Ps.i18n.model.Case.transaction_no,
  rc_bs_instanceLabel:                    Ps.i18n.model.Case.rc_bs_instance,
  form_instance_idLabel:                  Ps.i18n.model.Case.form_instance_id,
  config_codeLabel:                       Ps.i18n.model.Case.config_code,
  rbtacctidLabel:                         Ps.i18n.model.Case.rbtacctid,
  keywordsLabel:                          Ps.i18n.model.Case.keywords,
  escalation_countLabel:                  Ps.i18n.model.Case.escalation_count,
  escalation_dttmLabel:                   Ps.i18n.model.Case.escalation_dttm,
  survey_scoreLabel:                      Ps.i18n.model.Case.survey_score,
  rc_red_dttmLabel:                       Ps.i18n.model.Case.rc_red_dttm,
  rc_yellow_dttmLabel:                    Ps.i18n.model.Case.rc_yellow_dttm,
  agr_selected_dttmLabel:                 Ps.i18n.model.Case.agr_selected_dttm,
  row_added_dttmLabel:                    Ps.i18n.model.Case.row_added_dttm,
  row_added_opridLabel:                   Ps.i18n.model.Case.row_added_oprid,
  row_lastmant_dttmLabel:                 Ps.i18n.model.Case.row_lastmant_dttm,
  row_lastmant_opridLabel:                Ps.i18n.model.Case.row_lastmant_oprid,
  syncidLabel:                            Ps.i18n.model.Case.syncid,
  syncdttmLabel:                          Ps.i18n.model.Case.syncdttm,
  rc_descrlongLabel:                      Ps.i18n.model.Case.rc_descrlong,
  // LABELS (End)

  // TITLES (Start) ======================================================================
  title:     'Cases',
  subtitle:  'Create and maintain Cases',
  // TITLES (End)

  initComponent : function () {

    var me = this;

    // COLUMNS (Start) =====================================================================
    Ext.apply(this, {
      columns      : [
        {
          header       : this.case_idLabel,
          dataIndex    : 'case_id',
          flex         : 1
        },
        // {
        //   header       : this.business_unitLabel,
        //   dataIndex    : 'business_unit',
        //   flex         : 1
        // },
        // {
        //   header       : this.disp_tmpl_fam_cdLabel,
        //   dataIndex    : 'disp_tmpl_fam_cd',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_verticalLabel,
        //   dataIndex    : 'rc_vertical',
        //   flex         : 1
        // },
        // {
        //   header       : this.marketLabel,
        //   dataIndex    : 'market',
        //   flex         : 1
        // },
        // {
        //   header       : this.case_typeLabel,
        //   dataIndex    : 'case_type',
        //   flex         : 1
        // },
        // {
        //   header       : this.person_pinLabel,
        //   dataIndex    : 'person_pin',
        //   flex         : 1
        // },
        // {
        //   header       : this.sinLabel,
        //   dataIndex    : 'sin',
        //   flex         : 1
        // },
        // {
        //   header       : this.case_contactLabel,
        //   dataIndex    : 'case_contact',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_custLabel,
        //   dataIndex    : 'bo_id_cust',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_custLabel,
        //   dataIndex    : 'role_type_id_cust',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_cntctLabel,
        //   dataIndex    : 'role_type_id_cntct',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_siteLabel,
        //   dataIndex    : 'bo_id_site',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_siteLabel,
        //   dataIndex    : 'role_type_id_site',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_contactLabel,
        //   dataIndex    : 'bo_id_contact',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_alt_cnctLabel,
        //   dataIndex    : 'bo_id_alt_cnct',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_partnerLabel,
        //   dataIndex    : 'bo_id_partner',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_partLabel,
        //   dataIndex    : 'role_type_id_part',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_part_contLabel,
        //   dataIndex    : 'bo_id_part_cont',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_partcLabel,
        //   dataIndex    : 'role_type_id_partc',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_reported_byLabel,
        //   dataIndex    : 'bo_id_reported_by',
        //   flex         : 1
        // },
        // {
        //   header       : this.role_type_id_rptbyLabel,
        //   dataIndex    : 'role_type_id_rptby',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_cust_intLabel,
        //   dataIndex    : 'bo_id_cust_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_contact_intLabel,
        //   dataIndex    : 'bo_id_contact_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_bill_intLabel,
        //   dataIndex    : 'bo_id_bill_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.bo_id_cnt_bill_intLabel,
        //   dataIndex    : 'bo_id_cnt_bill_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_sld_intLabel,
        //   dataIndex    : 'profile_cm_sld_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_bil_intLabel,
        //   dataIndex    : 'profile_cm_bil_int',
        //   flex         : 1
        // },
        // {
        //   header       : this.deptidLabel,
        //   dataIndex    : 'deptid',
        //   flex         : 1
        // },
        // {
        //   header       : this.locationLabel,
        //   dataIndex    : 'location',
        //   flex         : 1
        // },
        // {
        //   header       : this.agreement_codeLabel,
        //   dataIndex    : 'agreement_code',
        //   flex         : 1
        // },
        // {
        //   header       : this.agr_renewal_numLabel,
        //   dataIndex    : 'agr_renewal_num',
        //   flex         : 1
        // },
        // {
        //   header       : this.agreement_lineLabel,
        //   dataIndex    : 'agreement_line',
        //   flex         : 1
        // },
        // {
        //   header       : this.warranty_nameLabel,
        //   dataIndex    : 'warranty_name',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_pay_for_svc_flgLabel,
        //   dataIndex    : 'rc_pay_for_svc_flg',
        //   flex         : 1
        // },
        // {
        //   header       : this.inst_prod_idLabel,
        //   dataIndex    : 'inst_prod_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.product_groupLabel,
        //   dataIndex    : 'product_group',
        //   flex         : 1
        // },
        // {
        //   header       : this.product_idLabel,
        //   dataIndex    : 'product_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.serial_idLabel,
        //   dataIndex    : 'serial_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.assettagLabel,
        //   dataIndex    : 'assettag',
        //   flex         : 1
        // },
        // {
        //   header       : this.distributor_idLabel,
        //   dataIndex    : 'distributor_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_sourceLabel,
        //   dataIndex    : 'rc_source',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_contact_methodLabel,
        //   dataIndex    : 'rc_contact_method',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_contact_infoLabel,
        //   dataIndex    : 'rc_contact_info',
        //   flex         : 1
        // },
        // {
        //   header       : this.cm_type_idLabel,
        //   dataIndex    : 'cm_type_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.cm_idLabel,
        //   dataIndex    : 'cm_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.rb_location_detailLabel,
        //   dataIndex    : 'rb_location_detail',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_seq_addLabel,
        //   dataIndex    : 'profile_cm_seq_add',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_seq_phnLabel,
        //   dataIndex    : 'profile_cm_seq_phn',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_seq_pgrLabel,
        //   dataIndex    : 'profile_cm_seq_pgr',
        //   flex         : 1
        // },
        // {
        //   header       : this.profile_cm_seq_emlLabel,
        //   dataIndex    : 'profile_cm_seq_eml',
        //   flex         : 1
        // },
        // {
        //   header       : this.region_idLabel,
        //   dataIndex    : 'region_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.provider_grp_idLabel,
        //   dataIndex    : 'provider_grp_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.assigned_toLabel,
        //   dataIndex    : 'assigned_to',
        //   flex         : 1
        // },
        // {
        //   header       : this.prior_prvdr_grp_idLabel,
        //   dataIndex    : 'prior_prvdr_grp_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.prior_assigned_toLabel,
        //   dataIndex    : 'prior_assigned_to',
        //   flex         : 1
        // },
        {
          header       : this.rc_statusLabel,
          dataIndex    : 'rc_status',
          flex         : 1
        },
        {
          header       : this.rc_priorityLabel,
          dataIndex    : 'rc_priority',
          flex         : 1
        },
        {
          header       : this.rc_impactLabel,
          dataIndex    : 'rc_impact',
          flex         : 1
        },
        // {
        //   header       : this.urgencyLabel,
        //   dataIndex    : 'urgency',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_severityLabel,
        //   dataIndex    : 'rc_severity',
        //   flex         : 1
        // },
        // {
        //   header       : this.bus_proc_instanceLabel,
        //   dataIndex    : 'bus_proc_instance',
        //   flex         : 1
        // },
        {
          header       : this.rc_categoryLabel,
          dataIndex    : 'rc_category',
          flex         : 1
        },
        {
          header       : this.rc_typeLabel,
          dataIndex    : 'rc_type',
          flex         : 1
        },
        {
          header       : this.rc_detailLabel,
          dataIndex    : 'rc_detail',
          flex         : 1
        },
        // {
        //   header       : this.problem_typeLabel,
        //   dataIndex    : 'problem_type',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_first_contactLabel,
        //   dataIndex    : 'rc_first_contact',
        //   flex         : 1
        // },
        // {
        //   header       : this.res_first_cntctLabel,
        //   dataIndex    : 'res_first_cntct',
        //   flex         : 1
        // },
        // {
        //   header       : this.creation_dateLabel,
        //   dataIndex    : 'creation_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.closed_dateLabel,
        //   dataIndex    : 'closed_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.closed_dttmLabel,
        //   dataIndex    : 'closed_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.closed_by_opridLabel,
        //   dataIndex    : 'closed_by_oprid',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_summaryLabel,
        //   dataIndex    : 'rc_summary',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_tracking_nbrLabel,
        //   dataIndex    : 'rc_tracking_nbr',
        //   flex         : 1
        // },
        // {
        //   header       : this.error_idLabel,
        //   dataIndex    : 'error_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_reopn_reason_cdLabel,
        //   dataIndex    : 'rc_reopn_reason_cd',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_close_reason_cdLabel,
        //   dataIndex    : 'rc_close_reason_cd',
        //   flex         : 1
        // },
        // {
        //   header       : this.error_codeLabel,
        //   dataIndex    : 'error_code',
        //   flex         : 1
        // },
        // {
        //   header       : this.error_messageLabel,
        //   dataIndex    : 'error_message',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_resp_dateLabel,
        //   dataIndex    : 'rc_resp_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_resp_timeLabel,
        //   dataIndex    : 'rc_resp_time',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_respmet_dateLabel,
        //   dataIndex    : 'rc_respmet_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_respmet_timeLabel,
        //   dataIndex    : 'rc_respmet_time',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_resp_indLabel,
        //   dataIndex    : 'rc_resp_ind',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_rest_dateLabel,
        //   dataIndex    : 'rc_rest_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_rest_timeLabel,
        //   dataIndex    : 'rc_rest_time',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_restmet_dateLabel,
        //   dataIndex    : 'rc_restmet_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_restmet_timeLabel,
        //   dataIndex    : 'rc_restmet_time',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_rest_indLabel,
        //   dataIndex    : 'rc_rest_ind',
        //   flex         : 1
        // },
        // {
        //   header       : this.remote_case_idLabel,
        //   dataIndex    : 'remote_case_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.rb_anonymous_flagLabel,
        //   dataIndex    : 'rb_anonymous_flag',
        //   flex         : 1
        // },
        // {
        //   header       : this.rb_site_nocust_flgLabel,
        //   dataIndex    : 'rb_site_nocust_flg',
        //   flex         : 1
        // },
        // {
        //   header       : this.secure_case_flgLabel,
        //   dataIndex    : 'secure_case_flg',
        //   flex         : 1
        // },
        // {
        //   header       : this.global_flagLabel,
        //   dataIndex    : 'global_flag',
        //   flex         : 1
        // },
        // {
        //   header       : this.case_subtypeLabel,
        //   dataIndex    : 'case_subtype',
        //   flex         : 1
        // },
        // {
        //   header       : this.case_visibilityLabel,
        //   dataIndex    : 'case_visibility',
        //   flex         : 1
        // },
        // {
        //   header       : this.fin_account_idLabel,
        //   dataIndex    : 'fin_account_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.target_close_dateLabel,
        //   dataIndex    : 'target_close_date',
        //   flex         : 1
        // },
        // {
        //   header       : this.sales_entry_idLabel,
        //   dataIndex    : 'sales_entry_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.transaction_noLabel,
        //   dataIndex    : 'transaction_no',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_bs_instanceLabel,
        //   dataIndex    : 'rc_bs_instance',
        //   flex         : 1
        // },
        // {
        //   header       : this.form_instance_idLabel,
        //   dataIndex    : 'form_instance_id',
        //   flex         : 1
        // },
        // {
        //   header       : this.config_codeLabel,
        //   dataIndex    : 'config_code',
        //   flex         : 1
        // },
        // {
        //   header       : this.rbtacctidLabel,
        //   dataIndex    : 'rbtacctid',
        //   flex         : 1
        // },
        // {
        //   header       : this.keywordsLabel,
        //   dataIndex    : 'keywords',
        //   flex         : 1
        // },
        // {
        //   header       : this.escalation_countLabel,
        //   dataIndex    : 'escalation_count',
        //   flex         : 1
        // },
        // {
        //   header       : this.escalation_dttmLabel,
        //   dataIndex    : 'escalation_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.survey_scoreLabel,
        //   dataIndex    : 'survey_score',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_red_dttmLabel,
        //   dataIndex    : 'rc_red_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_yellow_dttmLabel,
        //   dataIndex    : 'rc_yellow_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.agr_selected_dttmLabel,
        //   dataIndex    : 'agr_selected_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.row_added_dttmLabel,
        //   dataIndex    : 'row_added_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.row_added_opridLabel,
        //   dataIndex    : 'row_added_oprid',
        //   flex         : 1
        // },
        // {
        //   header       : this.row_lastmant_dttmLabel,
        //   dataIndex    : 'row_lastmant_dttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.row_lastmant_opridLabel,
        //   dataIndex    : 'row_lastmant_oprid',
        //   flex         : 1
        // },
        // {
        //   header       : this.syncidLabel,
        //   dataIndex    : 'syncid',
        //   flex         : 1
        // },
        // {
        //   header       : this.syncdttmLabel,
        //   dataIndex    : 'syncdttm',
        //   flex         : 1
        // },
        // {
        //   header       : this.rc_descrlongLabel,
        //   dataIndex    : 'rc_descrlong',
        //   flex         : 1
        // }
      ]
    });
    // COLUMNS (End)


    this.callParent();
  }

});