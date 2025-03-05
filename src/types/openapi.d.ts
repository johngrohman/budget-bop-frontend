import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * MonthInSchema
         */
        export interface MonthInSchema {
            /**
             * Month
             */
            month: string;
            /**
             * Year
             */
            year: string;
        }
        /**
         * MonthOutSchema
         */
        export interface MonthOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Month
             */
            month: string;
            year: /* YearSchema */ YearSchema;
        }
        /**
         * MonthSchema
         */
        export interface MonthSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Month
             */
            month: string;
            year: /* YearSchema */ YearSchema;
        }
        /**
         * SavingsInSchema
         */
        export interface SavingsInSchema {
            /**
             * Name
             */
            name: string;
            /**
             * Budget
             */
            budget: number;
            /**
             * Actual
             */
            actual: number;
            /**
             * Date
             */
            date: string; // date
            /**
             * Month
             */
            month: string;
        }
        /**
         * SavingsOutSchema
         */
        export interface SavingsOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             */
            name: string;
            /**
             * Budget
             */
            budget: number;
            /**
             * Actual
             */
            actual: number;
            /**
             * Date
             */
            date: string; // date
            month: /* MonthSchema */ MonthSchema;
        }
        /**
         * YearInSchema
         */
        export interface YearInSchema {
            /**
             * Year
             */
            year: string;
        }
        /**
         * YearOutSchema
         */
        export interface YearOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Year
             */
            year: string;
        }
        /**
         * YearSchema
         */
        export interface YearSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Year
             */
            year: string;
        }
    }
}
declare namespace Paths {
    namespace AppApiMonthApiDeleteMonth {
        namespace Parameters {
            /**
             * Month Id
             */
            export type MonthId = string; // uuid
        }
        export interface PathParameters {
            month_id: /* Month Id */ Parameters.MonthId /* uuid */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiMonthApiGetAllMonths {
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* MonthOutSchema */ Components.Schemas.MonthOutSchema[];
        }
    }
    namespace AppApiMonthApiGetMonthById {
        namespace Parameters {
            /**
             * Month Id
             */
            export type MonthId = string; // uuid
        }
        export interface PathParameters {
            month_id: /* Month Id */ Parameters.MonthId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* MonthOutSchema */ Components.Schemas.MonthOutSchema;
        }
    }
    namespace AppApiMonthApiPatchMonth {
        namespace Parameters {
            /**
             * Month Id
             */
            export type MonthId = string; // uuid
        }
        export interface PathParameters {
            month_id: /* Month Id */ Parameters.MonthId /* uuid */;
        }
        export type RequestBody = /* MonthInSchema */ Components.Schemas.MonthInSchema;
        namespace Responses {
            export type $200 = /* MonthOutSchema */ Components.Schemas.MonthOutSchema;
        }
    }
    namespace AppApiMonthApiPostMonth {
        export type RequestBody = /* MonthInSchema */ Components.Schemas.MonthInSchema;
        namespace Responses {
            export type $200 = /* MonthOutSchema */ Components.Schemas.MonthOutSchema;
        }
    }
    namespace AppApiSavingsApiDeleteSavings {
        namespace Parameters {
            /**
             * Savings Id
             */
            export type SavingsId = string; // uuid
        }
        export interface PathParameters {
            savings_id: /* Savings Id */ Parameters.SavingsId /* uuid */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiSavingsApiGetAllSavings {
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* SavingsOutSchema */ Components.Schemas.SavingsOutSchema[];
        }
    }
    namespace AppApiSavingsApiGetSavingsById {
        namespace Parameters {
            /**
             * Savings Id
             */
            export type SavingsId = string; // uuid
        }
        export interface PathParameters {
            savings_id: /* Savings Id */ Parameters.SavingsId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* SavingsOutSchema */ Components.Schemas.SavingsOutSchema;
        }
    }
    namespace AppApiSavingsApiPostSavings {
        export type RequestBody = /* SavingsInSchema */ Components.Schemas.SavingsInSchema;
        namespace Responses {
            export type $200 = /* SavingsOutSchema */ Components.Schemas.SavingsOutSchema;
        }
    }
    namespace AppApiYearApiDeleteYear {
        namespace Parameters {
            /**
             * Year Id
             */
            export type YearId = string; // uuid
        }
        export interface PathParameters {
            year_id: /* Year Id */ Parameters.YearId /* uuid */;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiYearApiGetAllYears {
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* YearOutSchema */ Components.Schemas.YearOutSchema[];
        }
    }
    namespace AppApiYearApiGetYearById {
        namespace Parameters {
            /**
             * Year Id
             */
            export type YearId = string; // uuid
        }
        export interface PathParameters {
            year_id: /* Year Id */ Parameters.YearId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* YearOutSchema */ Components.Schemas.YearOutSchema;
        }
    }
    namespace AppApiYearApiPatchYear {
        namespace Parameters {
            /**
             * Year Id
             */
            export type YearId = string; // uuid
        }
        export interface PathParameters {
            year_id: /* Year Id */ Parameters.YearId /* uuid */;
        }
        export type RequestBody = /* YearInSchema */ Components.Schemas.YearInSchema;
        namespace Responses {
            export type $200 = /* YearOutSchema */ Components.Schemas.YearOutSchema;
        }
    }
    namespace AppApiYearApiPostCompleteYear {
        export type RequestBody = /* YearInSchema */ Components.Schemas.YearInSchema;
        namespace Responses {
            export type $200 = /* YearOutSchema */ Components.Schemas.YearOutSchema;
        }
    }
    namespace AppApiYearApiPostYear {
        export type RequestBody = /* YearInSchema */ Components.Schemas.YearInSchema;
        namespace Responses {
            export type $200 = /* YearOutSchema */ Components.Schemas.YearOutSchema;
        }
    }
}

export interface OperationMethods {
  /**
   * app_api_year_api_get_all_years - Get All Years
   */
  'app_api_year_api_get_all_years'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiGetAllYears.Responses.$200>
  /**
   * app_api_year_api_post_year - Post Year
   */
  'app_api_year_api_post_year'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiYearApiPostYear.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiPostYear.Responses.$200>
  /**
   * app_api_year_api_get_year_by_id - Get Year By Id
   */
  'app_api_year_api_get_year_by_id'(
    parameters?: Parameters<Paths.AppApiYearApiGetYearById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiGetYearById.Responses.$200>
  /**
   * app_api_year_api_patch_year - Patch Year
   */
  'app_api_year_api_patch_year'(
    parameters?: Parameters<Paths.AppApiYearApiPatchYear.PathParameters> | null,
    data?: Paths.AppApiYearApiPatchYear.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiPatchYear.Responses.$200>
  /**
   * app_api_year_api_delete_year - Delete Year
   */
  'app_api_year_api_delete_year'(
    parameters?: Parameters<Paths.AppApiYearApiDeleteYear.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiDeleteYear.Responses.$200>
  /**
   * app_api_year_api_post_complete_year - Post Complete Year
   */
  'app_api_year_api_post_complete_year'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiYearApiPostCompleteYear.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiYearApiPostCompleteYear.Responses.$200>
  /**
   * app_api_month_api_get_all_months - Get All Months
   */
  'app_api_month_api_get_all_months'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiGetAllMonths.Responses.$200>
  /**
   * app_api_month_api_post_month - Post Month
   */
  'app_api_month_api_post_month'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiMonthApiPostMonth.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiPostMonth.Responses.$200>
  /**
   * app_api_month_api_get_month_by_id - Get Month By Id
   */
  'app_api_month_api_get_month_by_id'(
    parameters?: Parameters<Paths.AppApiMonthApiGetMonthById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiGetMonthById.Responses.$200>
  /**
   * app_api_month_api_patch_month - Patch Month
   */
  'app_api_month_api_patch_month'(
    parameters?: Parameters<Paths.AppApiMonthApiPatchMonth.PathParameters> | null,
    data?: Paths.AppApiMonthApiPatchMonth.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiPatchMonth.Responses.$200>
  /**
   * app_api_month_api_delete_month - Delete Month
   */
  'app_api_month_api_delete_month'(
    parameters?: Parameters<Paths.AppApiMonthApiDeleteMonth.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiDeleteMonth.Responses.$200>
  /**
   * app_api_savings_api_get_all_savings - Get All Savings
   */
  'app_api_savings_api_get_all_savings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiGetAllSavings.Responses.$200>
  /**
   * app_api_savings_api_post_savings - Post Savings
   */
  'app_api_savings_api_post_savings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiSavingsApiPostSavings.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiPostSavings.Responses.$200>
  /**
   * app_api_savings_api_get_savings_by_id - Get Savings By Id
   */
  'app_api_savings_api_get_savings_by_id'(
    parameters?: Parameters<Paths.AppApiSavingsApiGetSavingsById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiGetSavingsById.Responses.$200>
  /**
   * app_api_savings_api_delete_savings - Delete Savings
   */
  'app_api_savings_api_delete_savings'(
    parameters?: Parameters<Paths.AppApiSavingsApiDeleteSavings.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiDeleteSavings.Responses.$200>
}

export interface PathsDictionary {
  ['/api/years/']: {
    /**
     * app_api_year_api_get_all_years - Get All Years
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiGetAllYears.Responses.$200>
    /**
     * app_api_year_api_post_year - Post Year
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiYearApiPostYear.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiPostYear.Responses.$200>
  }
  ['/api/years/{year_id}']: {
    /**
     * app_api_year_api_get_year_by_id - Get Year By Id
     */
    'get'(
      parameters?: Parameters<Paths.AppApiYearApiGetYearById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiGetYearById.Responses.$200>
    /**
     * app_api_year_api_patch_year - Patch Year
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiYearApiPatchYear.PathParameters> | null,
      data?: Paths.AppApiYearApiPatchYear.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiPatchYear.Responses.$200>
    /**
     * app_api_year_api_delete_year - Delete Year
     */
    'delete'(
      parameters?: Parameters<Paths.AppApiYearApiDeleteYear.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiDeleteYear.Responses.$200>
  }
  ['/api/years/complete/']: {
    /**
     * app_api_year_api_post_complete_year - Post Complete Year
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiYearApiPostCompleteYear.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiYearApiPostCompleteYear.Responses.$200>
  }
  ['/api/months/']: {
    /**
     * app_api_month_api_get_all_months - Get All Months
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiGetAllMonths.Responses.$200>
    /**
     * app_api_month_api_post_month - Post Month
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiMonthApiPostMonth.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiPostMonth.Responses.$200>
  }
  ['/api/months/{month_id}']: {
    /**
     * app_api_month_api_get_month_by_id - Get Month By Id
     */
    'get'(
      parameters?: Parameters<Paths.AppApiMonthApiGetMonthById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiGetMonthById.Responses.$200>
    /**
     * app_api_month_api_patch_month - Patch Month
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiMonthApiPatchMonth.PathParameters> | null,
      data?: Paths.AppApiMonthApiPatchMonth.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiPatchMonth.Responses.$200>
    /**
     * app_api_month_api_delete_month - Delete Month
     */
    'delete'(
      parameters?: Parameters<Paths.AppApiMonthApiDeleteMonth.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiDeleteMonth.Responses.$200>
  }
  ['/api/savings/']: {
    /**
     * app_api_savings_api_get_all_savings - Get All Savings
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiGetAllSavings.Responses.$200>
    /**
     * app_api_savings_api_post_savings - Post Savings
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiSavingsApiPostSavings.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiPostSavings.Responses.$200>
  }
  ['/api/savings/{savings_id}']: {
    /**
     * app_api_savings_api_get_savings_by_id - Get Savings By Id
     */
    'get'(
      parameters?: Parameters<Paths.AppApiSavingsApiGetSavingsById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiGetSavingsById.Responses.$200>
    /**
     * app_api_savings_api_delete_savings - Delete Savings
     */
    'delete'(
      parameters?: Parameters<Paths.AppApiSavingsApiDeleteSavings.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiDeleteSavings.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

export type MonthInSchema = Components.Schemas.MonthInSchema;
export type MonthOutSchema = Components.Schemas.MonthOutSchema;
export type MonthSchema = Components.Schemas.MonthSchema;
export type SavingsInSchema = Components.Schemas.SavingsInSchema;
export type SavingsOutSchema = Components.Schemas.SavingsOutSchema;
export type YearInSchema = Components.Schemas.YearInSchema;
export type YearOutSchema = Components.Schemas.YearOutSchema;
export type YearSchema = Components.Schemas.YearSchema;
