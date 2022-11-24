import moment from "moment";

const DATE_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const DATE_FORMAT = "YYYY-MM-DD";
const MONTH_FORMAT = "YYYY-MM";

export function formatToDateTime(
  date: moment.MomentInput = undefined,
  format = DATE_TIME_FORMAT
) {
  return moment(date).format(format);
}

export function formatToDate(
  date: moment.MomentInput = undefined,
  format = DATE_FORMAT
) {
  return moment(date).format(format);
}

export function formatToMonth(
  date: moment.MomentInput = undefined,
  format = MONTH_FORMAT
) {
  return moment(date).format(format);
}

export const dateUtil = moment;
