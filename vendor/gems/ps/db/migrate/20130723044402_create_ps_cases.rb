class CreatePsCases < ActiveRecord::Migration
  def change
  	ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
    @connection = ActiveRecord::Base.connection
  	unless ActiveRecord::Base.connection.tables.include?('cases')
      create_table(:cases, :id => false) do |t|
        t.column   :case_id,                         :integer,           :null  =>  true
        t.column   :business_unit,                   :string,            :null  =>  true,   :limit   => 5
        t.column   :disp_tmpl_fam_cd,                :string,            :null  =>  true,   :limit   => 30
        t.column   :rc_vertical,                     :string,            :null  =>  true,   :limit   => 4
        t.column   :market,                          :string,            :null  =>  true,   :limit   => 3
        t.column   :case_type,                       :string,            :null  =>  true,   :limit   => 5
        t.column   :person_pin,                      :string,            :null  =>  true,   :limit   => 40
        t.column   :sin,                             :string,            :null  =>  true,   :limit   => 40
        t.column   :case_contact,                    :string,            :null  =>  true,   :limit   => 15
        t.column   :bo_id_cust,                      :integer,           :null  =>  true
        t.column   :role_type_id_cust,               :integer,           :null  =>  true
        t.column   :role_type_id_cntct,              :integer,           :null  =>  true
        t.column   :bo_id_site,                      :integer,           :null  =>  true
        t.column   :role_type_id_site,               :integer,           :null  =>  true
        t.column   :bo_id_contact,                   :integer,           :null  =>  true
        t.column   :bo_id_alt_cnct,                  :integer,           :null  =>  true
        t.column   :bo_id_partner,                   :integer,           :null  =>  true
        t.column   :role_type_id_part,               :integer,           :null  =>  true
        t.column   :bo_id_part_cont,                 :integer,           :null  =>  true
        t.column   :role_type_id_partc,              :integer,           :null  =>  true
        t.column   :bo_id_reported_by,               :integer,           :null  =>  true
        t.column   :role_type_id_rptby,              :integer,           :null  =>  true
        t.column   :bo_id_cust_int,                  :integer,           :null  =>  true
        t.column   :bo_id_contact_int,               :integer,           :null  =>  true
        t.column   :bo_id_bill_int,                  :integer,           :null  =>  true
        t.column   :bo_id_cnt_bill_int,              :integer,           :null  =>  true
        t.column   :profile_cm_sld_int,              :integer,           :null  =>  true
        t.column   :profile_cm_bil_int,              :integer,           :null  =>  true
        t.column   :deptid,                          :string,            :null  =>  true,   :limit   => 15
        t.column   :location,                        :string,            :null  =>  true,   :limit   => 15
        t.column   :agreement_code,                  :string,            :null  =>  true,   :limit   => 30
        t.column   :agr_renewal_num,                 :integer,           :null  =>  true
        t.column   :agreement_line,                  :string,            :null  =>  true,   :limit   => 10
        t.column   :warranty_name,                   :string,            :null  =>  true,   :limit   => 40
        t.column   :rc_pay_for_svc_flg,              :string,            :null  =>  true,   :limit   => 1
        t.column   :inst_prod_id,                    :string,            :null  =>  true,   :limit   => 20
        t.column   :product_group,                   :string,            :null  =>  true,   :limit   => 10
        t.column   :product_id,                      :string,            :null  =>  true,   :limit   => 18
        t.column   :serial_id,                       :string,            :null  =>  true,   :limit   => 20
        t.column   :assettag,                        :string,            :null  =>  true,   :limit   => 40
        t.column   :distributor_id,                  :string,            :null  =>  true,   :limit   => 30
        t.column   :rc_source,                       :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_contact_method,               :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_contact_info,                 :string,            :null  =>  true,   :limit   => 70
        t.column   :cm_type_id,                      :integer,           :null  =>  true
        t.column   :cm_id,                           :integer,           :null  =>  true
        t.column   :rb_location_detail,              :string,            :null  =>  true,   :limit   => 254
        t.column   :profile_cm_seq_add,              :integer,           :null  =>  true
        t.column   :profile_cm_seq_phn,              :integer,           :null  =>  true
        t.column   :profile_cm_seq_pgr,              :integer,           :null  =>  true
        t.column   :profile_cm_seq_eml,              :integer,           :null  =>  true
        t.column   :region_id,                       :string,            :null  =>  true,   :limit   => 15
        t.column   :provider_grp_id,                 :string,            :null  =>  true,   :limit   => 10
        t.column   :assigned_to,                     :string,            :null  =>  true,   :limit   => 15
        t.column   :prior_prvdr_grp_id,              :string,            :null  =>  true,   :limit   => 10
        t.column   :prior_assigned_to,               :string,            :null  =>  true,   :limit   => 15
        t.column   :rc_status,                       :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_priority,                     :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_impact,                       :string,            :null  =>  true,   :limit   => 5
        t.column   :urgency,                         :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_severity,                     :string,            :null  =>  true,   :limit   => 5
        t.column   :bus_proc_instance,               :integer,           :null  =>  true
        t.column   :rc_category,                     :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_type,                         :string,            :null  =>  true,   :limit   => 5
        t.column   :rc_detail,                       :string,            :null  =>  true,   :limit   => 5
        t.column   :problem_type,                    :string,            :null  =>  true,   :limit   => 8
        t.column   :rc_first_contact,                :string,            :null  =>  true,   :limit   => 1
        t.column   :res_first_cntct,                 :string,            :null  =>  true,   :limit   => 1
        t.column   :creation_date,                   :date,              :null  =>  true
        t.column   :closed_date,                     :date,              :null  =>  true
        t.column   :closed_dttm,                     :date,              :null  =>  true
        t.column   :closed_by_oprid,                 :string,            :null  =>  true,   :limit   => 30
        t.column   :rc_summary,                      :string,            :null  =>  true,   :limit   => 80
        t.column   :rc_tracking_nbr,                 :string,            :null  =>  true,   :limit   => 30
        t.column   :error_id,                        :integer,           :null  =>  true
        t.column   :rc_reopn_reason_cd,              :string,            :null  =>  true,   :limit   => 10
        t.column   :rc_close_reason_cd,              :string,            :null  =>  true,   :limit   => 10
        t.column   :error_code,                      :string,            :null  =>  true,   :limit   => 20
        t.column   :error_message,                   :string,            :null  =>  true,   :limit   => 254
        t.column   :rc_resp_date,                    :date,              :null  =>  true
        t.column   :rc_resp_time,                    :date,              :null  =>  true
        t.column   :rc_respmet_date,                 :date,              :null  =>  true
        t.column   :rc_respmet_time,                 :date,              :null  =>  true
        t.column   :rc_resp_ind,                     :string,            :null  =>  true,   :limit   => 4
        t.column   :rc_rest_date,                    :date,              :null  =>  true
        t.column   :rc_rest_time,                    :date,              :null  =>  true
        t.column   :rc_restmet_date,                 :date,              :null  =>  true
        t.column   :rc_restmet_time,                 :date,              :null  =>  true
        t.column   :rc_rest_ind,                     :string,            :null  =>  true,   :limit   => 4
        t.column   :remote_case_id,                  :string,            :null  =>  true,   :limit   => 18
        t.column   :rb_anonymous_flag,               :string,            :null  =>  true,   :limit   => 1
        t.column   :rb_site_nocust_flg,              :string,            :null  =>  true,   :limit   => 1
        t.column   :secure_case_flg,                 :string,            :null  =>  true,   :limit   => 1
        t.column   :global_flag,                     :string,            :null  =>  true,   :limit   => 1
        t.column   :case_subtype,                    :string,            :null  =>  true,   :limit   => 5
        t.column   :case_visibility,                 :string,            :null  =>  true,   :limit   => 4
        t.column   :fin_account_id,                  :string,            :null  =>  true,   :limit   => 20
        t.column   :target_close_date,               :date,              :null  =>  true
        t.column   :sales_entry_id,                  :string,            :null  =>  true,   :limit   => 15
        t.column   :transaction_no,                  :string,            :null  =>  true,   :limit   => 15
        t.column   :rc_bs_instance,                  :integer,           :null  =>  true
        t.column   :form_instance_id,                :integer,           :null  =>  true
        t.column   :config_code,                     :string,            :null  =>  true,   :limit   => 50
        t.column   :rbtacctid,                       :string,            :null  =>  true,   :limit   => 15
        t.column   :keywords,                        :string,            :null  =>  true,   :limit   => 100
        t.column   :escalation_count,                :integer,           :null  =>  true
        t.column   :escalation_dttm,                 :date,              :null  =>  true
        t.column   :survey_score,                    :integer,           :null  =>  true
        t.column   :rc_red_dttm,                     :date,              :null  =>  true
        t.column   :rc_yellow_dttm,                  :date,              :null  =>  true
        t.column   :agr_selected_dttm,               :date,              :null  =>  true
        t.column   :row_added_dttm,                  :date,              :null  =>  true
        t.column   :row_added_oprid,                 :string,            :null  =>  true,   :limit   => 30
        t.column   :row_lastmant_dttm,               :date,              :null  =>  true
        t.column   :row_lastmant_oprid,              :string,            :null  =>  true,   :limit   => 30
        t.column   :syncid,                          :integer,           :null  =>  true
        t.column   :syncdttm,                        :date,              :null  =>  true
        t.column   :rc_descrlong,                    :text,              :null  =>  true
      end
    end
    ActiveRecord::Base.establish_connection(Buildit::Util::Data::Connection.for('BUILDIT'))
  end
end
