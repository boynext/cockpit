export default {
  getChartAreaProps: _this => {
    return {
      title: "本月每天入院人数统计",
      to: "/cockpit/hospital/enter/diseasedetail"
    };
  },
  getHeaderProps: state => {
    const { enterHospital } = state;
    return {
      small: true,
      title: "入院人数",
      count: enterHospital
    };
  },
  getListAreaProps: () => {
    return {
      title: "不同科室和病区的入院人数"
    };
  },
  getChartData: state => state.listEnter
};
