export const DataPicker = () => {


$.datepicker.setDefaults($.datepicker.regional["ru"]);
 $("#check-in").datepicker({
   numberOfMonths: [1, 2],
 });
 $("#check-out").datepicker({
   numberOfMonths: [1, 2],
 });


};
