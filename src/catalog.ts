/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2024-04-08T09:26:08.664Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */
export const Category: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId: IAttribute = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */
export const CustomerName: IAttribute = newAttribute("customer_name");
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId: IAttribute = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */
export const ProductName: IAttribute = newAttribute("product_name");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */
export const Category_1: IAttribute = newAttribute("products.category");
/**
 * Attribute Title: Region
 * Attribute ID: region
 */
export const Region: IAttribute = newAttribute("region");
/**
 * Attribute Title: State
 * Attribute ID: state
 */
export const State = {
  /**
   * Display Form Title: State
   * Display Form ID: state
   */
  Default: newAttribute("state")
  /**
   * Display Form Title: Location
   * Display Form ID: geo__state__location
   */,
  Location: newAttribute("geo__state__location"),
};
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Metric Title: Revenue
 * Metric ID: revenue
 * Metric Type: MAQL Metric
 */
export const Revenue: IMeasure<IMeasureDefinition> = newMeasure(idRef("revenue", "measure"));
/**
 * Metric Title: Sales
 * Metric ID: sales
 * Metric Type: MAQL Metric
 */
export const Sales: IMeasure<IMeasureDefinition> = newMeasure(idRef("sales", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Table
   * Insight ID: 68dba711-161e-4365-8ba3-8f71f8bdea9b
   */
  Table: "68dba711-161e-4365-8ba3-8f71f8bdea9b"
  /**
   * Insight Title: Budget pie
   * Insight ID: 6a5818db-cf93-4242-89d4-a42efb2ab6ae
   */,
  BudgetPie: "6a5818db-cf93-4242-89d4-a42efb2ab6ae"
  /**
   * Insight Title: Campaing cost by category
   * Insight ID: d360e59b-0764-4445-9fd3-88cc5eedd3d6
   */,
  CampaingCostByCategory: "d360e59b-0764-4445-9fd3-88cc5eedd3d6",
};
export const Dashboards = {
  /**
   * Dashboard Title: Overview
   * Dashboard ID: 6e43ea4d-fc64-4af6-aa59-5b735f4167ac
   */
  Overview: "6e43ea4d-fc64-4af6-aa59-5b735f4167ac",
};
