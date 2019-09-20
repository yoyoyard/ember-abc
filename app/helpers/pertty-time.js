import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export default helper(function perttyTime(params/*, hash*/) {
  let timeString = params[0];
  return dayjs(timeString);
});
