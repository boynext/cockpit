import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CalendarBase from "react-calendar/dist/entry.nostyle";
import styled from "styled-components";
import { ControllSwitchHoc } from "wowjoy-component/es/tools";
const Wrap = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const Title = styled.div`
  height: 40px;
  color: #fff;
  background: linear-gradient(-244deg, #0b7fe6 0%, #1ab6f4 98%);
  display: flex;
  align-items: center;
  font-size: 14px;
  span {
    padding: 0 10px;
  }
  h4 {
    text-align: center;
    flex-grow: 1;
    font-size: 16px;
    font-weight: bold;
  }
`;
const CalendarMain = styled(CalendarBase)`
  background: #fff;
  width: 100%;
  border: none;
  padding: 0 2.75vw;
  button {
    background: #fff;
    color: #666;
  }
  .react-calendar__navigation {
    height: 50px;
    align-items: center;
    justify-content: center;
    button {
      color: #ccc;
      font-size: 24px;
      opacity: 0.9;
    }
    .react-calendar__navigation__label {
      flex-grow: 0 !important;
      font-size: 14px;
      color: #333;
      opacity: 1;
      padding: 0 15vw;
    }
  }
  .react-calendar__month-view__weekdays {
    margin-bottom: 15px;
  }
  .react-calendar__month-view__weekdays__weekday {
    text-align: center;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    color: #666;
  }
  .react-calendar__tile {
    padding: 1.25vw;
    time {
      display: inline-block;
      line-height: 11vw;
      width: 11vw;
      height: 11vw;
      border-radius: 50%;
      font-size: 12px;
    }
    &.react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0;
    }
    &.react-calendar__tile--now:not(.react-calendar__tile--active) {
      time {
        border: 2px solid #17adf2;
      }
    }
    &.react-calendar__tile--active {
      time {
        color: #fff;
        background: #1baffa;
      }
    }
    &[disabled] {
      color: #ddd;
    }
  }
`;

const weekArr = ["日", "一", "二", "三", "四", "五", "六"];
const CN_M_arr = [
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月"
];
const EN_M_arr = [
  "Jan.",
  "Feb.",
  "Mar.",
  "Apr.",
  "May.",
  "June,",
  "July.",
  "Aug.",
  "Sept.",
  "Oct.",
  "Nov.",
  "Dec."
];

const EnMonth = styled.p`
  line-height: 20px;
`;
const CnMonth = styled.p`
  line-height: 20px;
`;
const getMonthNode = month => [
  <EnMonth key={0}>{EN_M_arr[month]}</EnMonth>,
  <CnMonth key={1}>{CN_M_arr[month]}</CnMonth>
];
class Calendar extends PureComponent {
  cacheValue = null;
  wrapNode = {};
  render() {
    const { value, maxDate, type } = this.props;
    const viewType = {
      day: "month",
      month: "year",
      year: "decade"
    }[type];
    return (
      <Wrap innerRef={el => (this.wrapNode = el)} onClick={this.onWrapClick}>
        <Title>
          <span onClick={this.cancel}>取消</span>
          <h4>选择日期</h4>
          <span onClick={this.confirm}>确定</span>
        </Title>
        <CalendarMain
          className="calendar-main"
          view={viewType}
          maxDetail={viewType}
          minDetail={'decade'}
          calendarType={"US"}
          formatShortWeekday={date => weekArr[date.getDay()]}
          value={value}
          onChange={this.onClickDay}
          maxDate={maxDate}
          formatMonth={date => getMonthNode(date.getMonth())}
        />
      </Wrap>
    );
  }
  onWrapClick = e => {
    if (e.target === this.wrapNode) {
      this.cancel();
    }
  };
  onClickMonth = date => {
    console.log(date);
    return false;
  };
  onClickDay = date => {
    this.cacheValue = date;
  };
  cancel = () => {
    const { onCancel } = this.props;
    this.cacheValue = null;
    onCancel && onCancel();
  };
  confirm = () => {
    const { onChange } = this.props;
    if (this.cacheValue) {
      onChange && onChange(this.cacheValue);
    } else {
      this.cancel();
    }
  };
}

Calendar.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default ControllSwitchHoc({})(Calendar);
