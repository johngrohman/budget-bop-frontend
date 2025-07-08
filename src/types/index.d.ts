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
         * FixedExpenseFilterSchema
         */
        export interface FixedExpenseFilterSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date-time */ | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * FixedExpenseInSchema
         */
        export interface FixedExpenseInSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * FixedExpenseOutSchema
         */
        export interface FixedExpenseOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            month?: /* MonthSchema */ MonthSchema | null;
        }
        /**
         * IncomeFilterSchema
         */
        export interface IncomeFilterSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date-time */ | null;
            /**
             * Expected
             */
            expected?: /* Expected */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * IncomeInSchema
         */
        export interface IncomeInSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            /**
             * Expected
             */
            expected?: /* Expected */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * IncomeOutSchema
         */
        export interface IncomeOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            /**
             * Expected
             */
            expected?: /* Expected */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            month?: /* MonthSchema */ MonthSchema | null;
        }
        /**
         * MonthFixedExpense
         */
        export interface MonthFixedExpense {
            /**
             * Budget
             */
            budget: number;
            /**
             * Actual
             */
            actual: number;
        }
        /**
         * MonthInSchema
         */
        export interface MonthInSchema {
            /**
             * Month
             */
            month: string;
        }
        /**
         * MonthIncome
         */
        export interface MonthIncome {
            /**
             * Expected
             */
            expected: number;
            /**
             * Actual
             */
            actual: number;
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
            total_income: /* MonthIncome */ MonthIncome | null;
            total_fixed_expenses: /* MonthFixedExpense */ MonthFixedExpense | null;
            total_variable_expenses: /* MonthVariableExpense */ MonthVariableExpense | null;
            total_savings: /* MonthSavings */ MonthSavings | null;
        }
        /**
         * MonthSavings
         */
        export interface MonthSavings {
            /**
             * Budget
             */
            budget: number;
            /**
             * Actual
             */
            actual: number;
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
            total_income: /* MonthIncome */ MonthIncome | null;
            total_fixed_expenses: /* MonthFixedExpense */ MonthFixedExpense | null;
            total_variable_expenses: /* MonthVariableExpense */ MonthVariableExpense | null;
            total_savings: /* MonthSavings */ MonthSavings | null;
        }
        /**
         * MonthVariableExpense
         */
        export interface MonthVariableExpense {
            /**
             * Budget
             */
            budget: number;
            /**
             * Actual
             */
            actual: number;
        }
        /**
         * SavingsFilterSchema
         */
        export interface SavingsFilterSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ string | null;
            /**
             * Actual
             */
            actual?: /* Actual */ string | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * SavingsInSchema
         */
        export interface SavingsInSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
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
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Date
             */
            date?: /* Date */ string /* date */ | null;
            month?: /* MonthSchema */ MonthSchema | null;
        }
        /**
         * TransactionFilterSchema
         */
        export interface TransactionFilterSchema {
            /**
             * Date
             */
            date?: /* Date */ string /* date-time */ | null;
            /**
             * Amount
             */
            amount?: /* Amount */ number | null;
            /**
             * Description
             */
            description?: /* Description */ string | null;
            /**
             * Category
             */
            category?: /* Category */ string | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * TransactionInSchema
         */
        export interface TransactionInSchema {
            /**
             * Date
             */
            date: string; // date
            /**
             * Amount
             */
            amount: number;
            /**
             * Description
             */
            description: string;
            /**
             * Category
             */
            category: string;
        }
        /**
         * TransactionOutSchema
         */
        export interface TransactionOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Date
             */
            date: string; // date
            /**
             * Amount
             */
            amount: number;
            /**
             * Description
             */
            description: string;
            /**
             * Category
             */
            category: string;
            month: /* MonthSchema */ MonthSchema;
        }
        /**
         * VariableExpenseFilterSchema
         */
        export interface VariableExpenseFilterSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * VariableExpenseInSchema
         */
        export interface VariableExpenseInSchema {
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            /**
             * Month Id
             */
            month_id?: /* Month Id */ string /* uuid */ | null;
        }
        /**
         * VariableExpenseOutSchema
         */
        export interface VariableExpenseOutSchema {
            /**
             * Id
             */
            id: string; // uuid
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Budget
             */
            budget?: /* Budget */ number | null;
            /**
             * Actual
             */
            actual?: /* Actual */ number | null;
            month?: /* MonthSchema */ MonthSchema | null;
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
    namespace AppApiFixedExpenseApiDeleteFixedExpense {
        /**
         * Payload
         */
        export type RequestBody = string /* uuid */[];
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiFixedExpenseApiListFixedExpense {
        namespace Parameters {
            /**
             * Actual
             */
            export type Actual = /* Actual */ number | null;
            /**
             * Budget
             */
            export type Budget = /* Budget */ number | null;
            /**
             * Date
             */
            export type Date = /* Date */ string /* date-time */ | null;
            /**
             * Month Id
             */
            export type MonthId = /* Month Id */ string /* uuid */ | null;
            /**
             * Name
             */
            export type Name = /* Name */ string | null;
        }
        export interface QueryParameters {
            name?: /* Name */ Parameters.Name;
            date?: /* Date */ Parameters.Date;
            budget?: /* Budget */ Parameters.Budget;
            actual?: /* Actual */ Parameters.Actual;
            month_id?: /* Month Id */ Parameters.MonthId;
        }
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* FixedExpenseOutSchema */ Components.Schemas.FixedExpenseOutSchema[];
        }
    }
    namespace AppApiFixedExpenseApiPatchFixedExpense {
        namespace Parameters {
            /**
             * Fixed Expense Id
             */
            export type FixedExpenseId = string; // uuid
        }
        export interface PathParameters {
            fixed_expense_id: /* Fixed Expense Id */ Parameters.FixedExpenseId /* uuid */;
        }
        export type RequestBody = /* FixedExpenseInSchema */ Components.Schemas.FixedExpenseInSchema;
        namespace Responses {
            export type $200 = /* FixedExpenseOutSchema */ Components.Schemas.FixedExpenseOutSchema;
        }
    }
    namespace AppApiFixedExpenseApiPostFixedExpense {
        export type RequestBody = /* FixedExpenseInSchema */ Components.Schemas.FixedExpenseInSchema;
        namespace Responses {
            export type $200 = /* FixedExpenseOutSchema */ Components.Schemas.FixedExpenseOutSchema;
        }
    }
    namespace AppApiIncomeApiDeleteIncome {
        /**
         * Payload
         */
        export type RequestBody = string /* uuid */[];
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiIncomeApiListIncome {
        namespace Parameters {
            /**
             * Actual
             */
            export type Actual = /* Actual */ number | null;
            /**
             * Date
             */
            export type Date = /* Date */ string /* date-time */ | null;
            /**
             * Expected
             */
            export type Expected = /* Expected */ number | null;
            /**
             * Month Id
             */
            export type MonthId = /* Month Id */ string /* uuid */ | null;
            /**
             * Name
             */
            export type Name = /* Name */ string | null;
        }
        export interface QueryParameters {
            name?: /* Name */ Parameters.Name;
            date?: /* Date */ Parameters.Date;
            expected?: /* Expected */ Parameters.Expected;
            actual?: /* Actual */ Parameters.Actual;
            month_id?: /* Month Id */ Parameters.MonthId;
        }
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* IncomeOutSchema */ Components.Schemas.IncomeOutSchema[];
        }
    }
    namespace AppApiIncomeApiPatchIncome {
        namespace Parameters {
            /**
             * Income Id
             */
            export type IncomeId = string; // uuid
        }
        export interface PathParameters {
            income_id: /* Income Id */ Parameters.IncomeId /* uuid */;
        }
        export type RequestBody = /* IncomeInSchema */ Components.Schemas.IncomeInSchema;
        namespace Responses {
            export type $200 = /* IncomeOutSchema */ Components.Schemas.IncomeOutSchema;
        }
    }
    namespace AppApiIncomeApiPostIncome {
        export type RequestBody = /* IncomeInSchema */ Components.Schemas.IncomeInSchema;
        namespace Responses {
            export type $200 = /* IncomeOutSchema */ Components.Schemas.IncomeOutSchema;
        }
    }
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
    namespace AppApiMonthApiListMonthsInYear {
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
            /**
             * Response
             */
            export type $200 = /* MonthOutSchema */ Components.Schemas.MonthOutSchema[];
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
        /**
         * Payload
         */
        export type RequestBody = string /* uuid */[];
        namespace Responses {
            export interface $200 {
            }
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
    namespace AppApiSavingsApiListAllSavings {
        namespace Parameters {
            /**
             * Actual
             */
            export type Actual = /* Actual */ string | null;
            /**
             * Budget
             */
            export type Budget = /* Budget */ string | null;
            /**
             * Month Id
             */
            export type MonthId = /* Month Id */ string /* uuid */ | null;
            /**
             * Name
             */
            export type Name = /* Name */ string | null;
        }
        export interface QueryParameters {
            name?: /* Name */ Parameters.Name;
            budget?: /* Budget */ Parameters.Budget;
            actual?: /* Actual */ Parameters.Actual;
            month_id?: /* Month Id */ Parameters.MonthId;
        }
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* SavingsOutSchema */ Components.Schemas.SavingsOutSchema[];
        }
    }
    namespace AppApiSavingsApiPatchSavings {
        namespace Parameters {
            /**
             * Savings Id
             */
            export type SavingsId = string; // uuid
        }
        export interface PathParameters {
            savings_id: /* Savings Id */ Parameters.SavingsId /* uuid */;
        }
        export type RequestBody = /* SavingsInSchema */ Components.Schemas.SavingsInSchema;
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
    namespace AppApiTimeApiListAllTimeData {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiTransactionApiDeleteTransaction {
        /**
         * Payload
         */
        export type RequestBody = string /* uuid */[];
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiTransactionApiGetTransactionById {
        namespace Parameters {
            /**
             * Transaction Id
             */
            export type TransactionId = string; // uuid
        }
        export interface PathParameters {
            transaction_id: /* Transaction Id */ Parameters.TransactionId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* TransactionOutSchema */ Components.Schemas.TransactionOutSchema;
        }
    }
    namespace AppApiTransactionApiGetTransactionSummary {
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
    namespace AppApiTransactionApiListTransactions {
        namespace Parameters {
            /**
             * Amount
             */
            export type Amount = /* Amount */ number | null;
            /**
             * Category
             */
            export type Category = /* Category */ string | null;
            /**
             * Date
             */
            export type Date = /* Date */ string /* date-time */ | null;
            /**
             * Description
             */
            export type Description = /* Description */ string | null;
            /**
             * Month Id
             */
            export type MonthId = /* Month Id */ string /* uuid */ | null;
        }
        export interface QueryParameters {
            date?: /* Date */ Parameters.Date;
            amount?: /* Amount */ Parameters.Amount;
            description?: /* Description */ Parameters.Description;
            category?: /* Category */ Parameters.Category;
            month_id?: /* Month Id */ Parameters.MonthId;
        }
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* TransactionOutSchema */ Components.Schemas.TransactionOutSchema[];
        }
    }
    namespace AppApiTransactionApiPatchTransaction {
        namespace Parameters {
            /**
             * Transaction Id
             */
            export type TransactionId = string; // uuid
        }
        export interface PathParameters {
            transaction_id: /* Transaction Id */ Parameters.TransactionId /* uuid */;
        }
        export type RequestBody = /* TransactionInSchema */ Components.Schemas.TransactionInSchema;
        namespace Responses {
            export type $200 = /* TransactionOutSchema */ Components.Schemas.TransactionOutSchema;
        }
    }
    namespace AppApiTransactionApiPostTransaction {
        export type RequestBody = /* TransactionInSchema */ Components.Schemas.TransactionInSchema;
        namespace Responses {
            export type $200 = /* TransactionOutSchema */ Components.Schemas.TransactionOutSchema;
        }
    }
    namespace AppApiTransactionApiUploadTransactionList {
        /**
         * MultiPartBodyParams
         */
        export interface RequestBody {
            /**
             * Month Id
             */
            month_id: string; // uuid
            /**
             * File
             */
            file: string; // binary
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiVariableExpenseApiDeleteVariableExpense {
        /**
         * Payload
         */
        export type RequestBody = string /* uuid */[];
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AppApiVariableExpenseApiGetVariableExpensesInMonth {
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
            /**
             * Response
             */
            export interface $200 {
                [name: string]: number;
            }
        }
    }
    namespace AppApiVariableExpenseApiListVariableExpense {
        namespace Parameters {
            /**
             * Actual
             */
            export type Actual = /* Actual */ number | null;
            /**
             * Budget
             */
            export type Budget = /* Budget */ number | null;
            /**
             * Month Id
             */
            export type MonthId = /* Month Id */ string /* uuid */ | null;
            /**
             * Name
             */
            export type Name = /* Name */ string | null;
        }
        export interface QueryParameters {
            name?: /* Name */ Parameters.Name;
            budget?: /* Budget */ Parameters.Budget;
            actual?: /* Actual */ Parameters.Actual;
            month_id?: /* Month Id */ Parameters.MonthId;
        }
        namespace Responses {
            /**
             * Response
             */
            export type $200 = /* VariableExpenseOutSchema */ Components.Schemas.VariableExpenseOutSchema[];
        }
    }
    namespace AppApiVariableExpenseApiPatchVariableExpense {
        namespace Parameters {
            /**
             * Variable Expense Id
             */
            export type VariableExpenseId = string; // uuid
        }
        export interface PathParameters {
            variable_expense_id: /* Variable Expense Id */ Parameters.VariableExpenseId /* uuid */;
        }
        export type RequestBody = /* VariableExpenseInSchema */ Components.Schemas.VariableExpenseInSchema;
        namespace Responses {
            export type $200 = /* VariableExpenseOutSchema */ Components.Schemas.VariableExpenseOutSchema;
        }
    }
    namespace AppApiVariableExpenseApiPostVariableExpense {
        export type RequestBody = /* VariableExpenseInSchema */ Components.Schemas.VariableExpenseInSchema;
        namespace Responses {
            export type $200 = /* VariableExpenseOutSchema */ Components.Schemas.VariableExpenseOutSchema;
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
   * app_api_month_api_post_month - Post Month
   */
  'app_api_month_api_post_month'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiMonthApiPostMonth.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiPostMonth.Responses.$200>
  /**
   * app_api_month_api_list_months_in_year - List Months In Year
   */
  'app_api_month_api_list_months_in_year'(
    parameters?: Parameters<Paths.AppApiMonthApiListMonthsInYear.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiMonthApiListMonthsInYear.Responses.$200>
  /**
   * app_api_income_api_list_income - List Income
   * 
   * Get a list of all income records.
   */
  'app_api_income_api_list_income'(
    parameters?: Parameters<Paths.AppApiIncomeApiListIncome.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiIncomeApiListIncome.Responses.$200>
  /**
   * app_api_income_api_post_income - Post Income
   */
  'app_api_income_api_post_income'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiIncomeApiPostIncome.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiIncomeApiPostIncome.Responses.$200>
  /**
   * app_api_income_api_delete_income - Delete Income
   */
  'app_api_income_api_delete_income'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiIncomeApiDeleteIncome.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiIncomeApiDeleteIncome.Responses.$200>
  /**
   * app_api_income_api_patch_income - Patch Income
   */
  'app_api_income_api_patch_income'(
    parameters?: Parameters<Paths.AppApiIncomeApiPatchIncome.PathParameters> | null,
    data?: Paths.AppApiIncomeApiPatchIncome.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiIncomeApiPatchIncome.Responses.$200>
  /**
   * app_api_variable_expense_api_list_variable_expense - List Variable Expense
   * 
   * List all variable expenses based on filters
   */
  'app_api_variable_expense_api_list_variable_expense'(
    parameters?: Parameters<Paths.AppApiVariableExpenseApiListVariableExpense.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiVariableExpenseApiListVariableExpense.Responses.$200>
  /**
   * app_api_variable_expense_api_post_variable_expense - Post Variable Expense
   */
  'app_api_variable_expense_api_post_variable_expense'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiVariableExpenseApiPostVariableExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiVariableExpenseApiPostVariableExpense.Responses.$200>
  /**
   * app_api_variable_expense_api_delete_variable_expense - Delete Variable Expense
   */
  'app_api_variable_expense_api_delete_variable_expense'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiVariableExpenseApiDeleteVariableExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiVariableExpenseApiDeleteVariableExpense.Responses.$200>
  /**
   * app_api_variable_expense_api_get_variable_expenses_in_month - Get Variable Expenses By Month ID
   * 
   * Retrieve a summary of transactions (variable expenses) in a given month.
   */
  'app_api_variable_expense_api_get_variable_expenses_in_month'(
    parameters?: Parameters<Paths.AppApiVariableExpenseApiGetVariableExpensesInMonth.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiVariableExpenseApiGetVariableExpensesInMonth.Responses.$200>
  /**
   * app_api_variable_expense_api_patch_variable_expense - Patch Variable Expense
   */
  'app_api_variable_expense_api_patch_variable_expense'(
    parameters?: Parameters<Paths.AppApiVariableExpenseApiPatchVariableExpense.PathParameters> | null,
    data?: Paths.AppApiVariableExpenseApiPatchVariableExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiVariableExpenseApiPatchVariableExpense.Responses.$200>
  /**
   * app_api_fixed_expense_api_list_fixed_expense - List Fixed Expense
   * 
   * List all fixed expenses based on filters
   */
  'app_api_fixed_expense_api_list_fixed_expense'(
    parameters?: Parameters<Paths.AppApiFixedExpenseApiListFixedExpense.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiFixedExpenseApiListFixedExpense.Responses.$200>
  /**
   * app_api_fixed_expense_api_post_fixed_expense - Post Fixed Expense
   */
  'app_api_fixed_expense_api_post_fixed_expense'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiFixedExpenseApiPostFixedExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiFixedExpenseApiPostFixedExpense.Responses.$200>
  /**
   * app_api_fixed_expense_api_delete_fixed_expense - Delete Fixed Expense
   */
  'app_api_fixed_expense_api_delete_fixed_expense'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiFixedExpenseApiDeleteFixedExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiFixedExpenseApiDeleteFixedExpense.Responses.$200>
  /**
   * app_api_fixed_expense_api_patch_fixed_expense - Patch Fixed Expense
   */
  'app_api_fixed_expense_api_patch_fixed_expense'(
    parameters?: Parameters<Paths.AppApiFixedExpenseApiPatchFixedExpense.PathParameters> | null,
    data?: Paths.AppApiFixedExpenseApiPatchFixedExpense.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiFixedExpenseApiPatchFixedExpense.Responses.$200>
  /**
   * app_api_savings_api_list_all_savings - List All Savings
   * 
   * List all savings based on filters
   */
  'app_api_savings_api_list_all_savings'(
    parameters?: Parameters<Paths.AppApiSavingsApiListAllSavings.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiListAllSavings.Responses.$200>
  /**
   * app_api_savings_api_post_savings - Post Savings
   */
  'app_api_savings_api_post_savings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiSavingsApiPostSavings.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiPostSavings.Responses.$200>
  /**
   * app_api_savings_api_delete_savings - Delete Savings
   */
  'app_api_savings_api_delete_savings'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiSavingsApiDeleteSavings.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiDeleteSavings.Responses.$200>
  /**
   * app_api_savings_api_get_savings_by_id - Get Savings By Id
   */
  'app_api_savings_api_get_savings_by_id'(
    parameters?: Parameters<Paths.AppApiSavingsApiGetSavingsById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiGetSavingsById.Responses.$200>
  /**
   * app_api_savings_api_patch_savings - Patch Savings
   */
  'app_api_savings_api_patch_savings'(
    parameters?: Parameters<Paths.AppApiSavingsApiPatchSavings.PathParameters> | null,
    data?: Paths.AppApiSavingsApiPatchSavings.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiSavingsApiPatchSavings.Responses.$200>
  /**
   * app_api_transaction_api_upload_transaction_list - Upload Transaction List
   * 
   * Upload CSV file with transactions.
   * 
   * 1. Parses transactions, inserting them into the database.
   * 
   * 2. Creates or updates corresponding variable expenses.
   */
  'app_api_transaction_api_upload_transaction_list'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiTransactionApiUploadTransactionList.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiUploadTransactionList.Responses.$200>
  /**
   * app_api_transaction_api_list_transactions - List Transactions
   */
  'app_api_transaction_api_list_transactions'(
    parameters?: Parameters<Paths.AppApiTransactionApiListTransactions.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiListTransactions.Responses.$200>
  /**
   * app_api_transaction_api_get_transaction_by_id - Get Transaction By Id
   */
  'app_api_transaction_api_get_transaction_by_id'(
    parameters?: Parameters<Paths.AppApiTransactionApiGetTransactionById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiGetTransactionById.Responses.$200>
  /**
   * app_api_transaction_api_patch_transaction - Patch Transaction
   */
  'app_api_transaction_api_patch_transaction'(
    parameters?: Parameters<Paths.AppApiTransactionApiPatchTransaction.PathParameters> | null,
    data?: Paths.AppApiTransactionApiPatchTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiPatchTransaction.Responses.$200>
  /**
   * app_api_transaction_api_get_transaction_summary - Get Transaction Summary
   */
  'app_api_transaction_api_get_transaction_summary'(
    parameters?: Parameters<Paths.AppApiTransactionApiGetTransactionSummary.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiGetTransactionSummary.Responses.$200>
  /**
   * app_api_transaction_api_post_transaction - Post Transaction
   */
  'app_api_transaction_api_post_transaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiTransactionApiPostTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiPostTransaction.Responses.$200>
  /**
   * app_api_transaction_api_delete_transaction - Delete Transaction
   */
  'app_api_transaction_api_delete_transaction'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AppApiTransactionApiDeleteTransaction.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTransactionApiDeleteTransaction.Responses.$200>
  /**
   * app_api_time_api_list_all_time_data - List All Time Data
   */
  'app_api_time_api_list_all_time_data'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AppApiTimeApiListAllTimeData.Responses.$200>
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
  ['/api/months/']: {
    /**
     * app_api_month_api_post_month - Post Month
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiMonthApiPostMonth.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiPostMonth.Responses.$200>
  }
  ['/api/months/year/{year_id}']: {
    /**
     * app_api_month_api_list_months_in_year - List Months In Year
     */
    'get'(
      parameters?: Parameters<Paths.AppApiMonthApiListMonthsInYear.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiMonthApiListMonthsInYear.Responses.$200>
  }
  ['/api/income/']: {
    /**
     * app_api_income_api_list_income - List Income
     * 
     * Get a list of all income records.
     */
    'get'(
      parameters?: Parameters<Paths.AppApiIncomeApiListIncome.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiIncomeApiListIncome.Responses.$200>
    /**
     * app_api_income_api_post_income - Post Income
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiIncomeApiPostIncome.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiIncomeApiPostIncome.Responses.$200>
    /**
     * app_api_income_api_delete_income - Delete Income
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiIncomeApiDeleteIncome.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiIncomeApiDeleteIncome.Responses.$200>
  }
  ['/api/income/{income_id}']: {
    /**
     * app_api_income_api_patch_income - Patch Income
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiIncomeApiPatchIncome.PathParameters> | null,
      data?: Paths.AppApiIncomeApiPatchIncome.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiIncomeApiPatchIncome.Responses.$200>
  }
  ['/api/variable-expense/']: {
    /**
     * app_api_variable_expense_api_list_variable_expense - List Variable Expense
     * 
     * List all variable expenses based on filters
     */
    'get'(
      parameters?: Parameters<Paths.AppApiVariableExpenseApiListVariableExpense.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiVariableExpenseApiListVariableExpense.Responses.$200>
    /**
     * app_api_variable_expense_api_post_variable_expense - Post Variable Expense
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiVariableExpenseApiPostVariableExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiVariableExpenseApiPostVariableExpense.Responses.$200>
    /**
     * app_api_variable_expense_api_delete_variable_expense - Delete Variable Expense
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiVariableExpenseApiDeleteVariableExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiVariableExpenseApiDeleteVariableExpense.Responses.$200>
  }
  ['/api/variable-expense/month/{month_id}']: {
    /**
     * app_api_variable_expense_api_get_variable_expenses_in_month - Get Variable Expenses By Month ID
     * 
     * Retrieve a summary of transactions (variable expenses) in a given month.
     */
    'get'(
      parameters?: Parameters<Paths.AppApiVariableExpenseApiGetVariableExpensesInMonth.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiVariableExpenseApiGetVariableExpensesInMonth.Responses.$200>
  }
  ['/api/variable-expense/{variable_expense_id}']: {
    /**
     * app_api_variable_expense_api_patch_variable_expense - Patch Variable Expense
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiVariableExpenseApiPatchVariableExpense.PathParameters> | null,
      data?: Paths.AppApiVariableExpenseApiPatchVariableExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiVariableExpenseApiPatchVariableExpense.Responses.$200>
  }
  ['/api/fixed-expense/']: {
    /**
     * app_api_fixed_expense_api_list_fixed_expense - List Fixed Expense
     * 
     * List all fixed expenses based on filters
     */
    'get'(
      parameters?: Parameters<Paths.AppApiFixedExpenseApiListFixedExpense.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiFixedExpenseApiListFixedExpense.Responses.$200>
    /**
     * app_api_fixed_expense_api_post_fixed_expense - Post Fixed Expense
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiFixedExpenseApiPostFixedExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiFixedExpenseApiPostFixedExpense.Responses.$200>
    /**
     * app_api_fixed_expense_api_delete_fixed_expense - Delete Fixed Expense
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiFixedExpenseApiDeleteFixedExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiFixedExpenseApiDeleteFixedExpense.Responses.$200>
  }
  ['/api/fixed-expense/{fixed_expense_id}']: {
    /**
     * app_api_fixed_expense_api_patch_fixed_expense - Patch Fixed Expense
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiFixedExpenseApiPatchFixedExpense.PathParameters> | null,
      data?: Paths.AppApiFixedExpenseApiPatchFixedExpense.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiFixedExpenseApiPatchFixedExpense.Responses.$200>
  }
  ['/api/savings/']: {
    /**
     * app_api_savings_api_list_all_savings - List All Savings
     * 
     * List all savings based on filters
     */
    'get'(
      parameters?: Parameters<Paths.AppApiSavingsApiListAllSavings.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiListAllSavings.Responses.$200>
    /**
     * app_api_savings_api_post_savings - Post Savings
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiSavingsApiPostSavings.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiPostSavings.Responses.$200>
    /**
     * app_api_savings_api_delete_savings - Delete Savings
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiSavingsApiDeleteSavings.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiDeleteSavings.Responses.$200>
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
     * app_api_savings_api_patch_savings - Patch Savings
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiSavingsApiPatchSavings.PathParameters> | null,
      data?: Paths.AppApiSavingsApiPatchSavings.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiSavingsApiPatchSavings.Responses.$200>
  }
  ['/api/transactions/upload']: {
    /**
     * app_api_transaction_api_upload_transaction_list - Upload Transaction List
     * 
     * Upload CSV file with transactions.
     * 
     * 1. Parses transactions, inserting them into the database.
     * 
     * 2. Creates or updates corresponding variable expenses.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiTransactionApiUploadTransactionList.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiUploadTransactionList.Responses.$200>
  }
  ['/api/transactions/list']: {
    /**
     * app_api_transaction_api_list_transactions - List Transactions
     */
    'get'(
      parameters?: Parameters<Paths.AppApiTransactionApiListTransactions.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiListTransactions.Responses.$200>
  }
  ['/api/transactions/{transaction_id}']: {
    /**
     * app_api_transaction_api_get_transaction_by_id - Get Transaction By Id
     */
    'get'(
      parameters?: Parameters<Paths.AppApiTransactionApiGetTransactionById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiGetTransactionById.Responses.$200>
    /**
     * app_api_transaction_api_patch_transaction - Patch Transaction
     */
    'patch'(
      parameters?: Parameters<Paths.AppApiTransactionApiPatchTransaction.PathParameters> | null,
      data?: Paths.AppApiTransactionApiPatchTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiPatchTransaction.Responses.$200>
  }
  ['/api/transactions/month/{month_id}']: {
    /**
     * app_api_transaction_api_get_transaction_summary - Get Transaction Summary
     */
    'get'(
      parameters?: Parameters<Paths.AppApiTransactionApiGetTransactionSummary.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiGetTransactionSummary.Responses.$200>
  }
  ['/api/transactions/']: {
    /**
     * app_api_transaction_api_post_transaction - Post Transaction
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiTransactionApiPostTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiPostTransaction.Responses.$200>
    /**
     * app_api_transaction_api_delete_transaction - Delete Transaction
     */
    'delete'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AppApiTransactionApiDeleteTransaction.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTransactionApiDeleteTransaction.Responses.$200>
  }
  ['/api/time/years-months']: {
    /**
     * app_api_time_api_list_all_time_data - List All Time Data
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AppApiTimeApiListAllTimeData.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>


export type FixedExpenseFilterSchema = Components.Schemas.FixedExpenseFilterSchema;
export type FixedExpenseInSchema = Components.Schemas.FixedExpenseInSchema;
export type FixedExpenseOutSchema = Components.Schemas.FixedExpenseOutSchema;
export type IncomeFilterSchema = Components.Schemas.IncomeFilterSchema;
export type IncomeInSchema = Components.Schemas.IncomeInSchema;
export type IncomeOutSchema = Components.Schemas.IncomeOutSchema;
export type MonthFixedExpense = Components.Schemas.MonthFixedExpense;
export type MonthInSchema = Components.Schemas.MonthInSchema;
export type MonthIncome = Components.Schemas.MonthIncome;
export type MonthOutSchema = Components.Schemas.MonthOutSchema;
export type MonthSavings = Components.Schemas.MonthSavings;
export type MonthSchema = Components.Schemas.MonthSchema;
export type MonthVariableExpense = Components.Schemas.MonthVariableExpense;
export type SavingsFilterSchema = Components.Schemas.SavingsFilterSchema;
export type SavingsInSchema = Components.Schemas.SavingsInSchema;
export type SavingsOutSchema = Components.Schemas.SavingsOutSchema;
export type TransactionFilterSchema = Components.Schemas.TransactionFilterSchema;
export type TransactionInSchema = Components.Schemas.TransactionInSchema;
export type TransactionOutSchema = Components.Schemas.TransactionOutSchema;
export type VariableExpenseFilterSchema = Components.Schemas.VariableExpenseFilterSchema;
export type VariableExpenseInSchema = Components.Schemas.VariableExpenseInSchema;
export type VariableExpenseOutSchema = Components.Schemas.VariableExpenseOutSchema;
export type YearInSchema = Components.Schemas.YearInSchema;
export type YearOutSchema = Components.Schemas.YearOutSchema;
export type YearSchema = Components.Schemas.YearSchema;
