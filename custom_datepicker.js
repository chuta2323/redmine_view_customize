/*!
 * Path pattern: /issues
 * Insertion position: Head of all pages (全てのページのヘッダ)
 * Type: JavaScript
 *
 * @brief   開始日／期日入力時の振る舞い改善
 */
$(function() {
  if (window.datepickerOptions) {
    /* set datepicker option */
    datepickerOptions.showButtonPanel = true
    datepickerOptions.firstDay = 1
    datepickerOptions.changeYear = false
    datepickerOptions.changeMonth = true
    datepickerOptions.numberOfMonths = 2
    datepickerOptions.beforeShow = function(input, inst) {
      const START_DATE = $('#issue_start_date').val()

      if (this.id === 'issue_due_date' && START_DATE !== '') {
        $('#issue_due_date').datepicker('option', 'minDate', START_DATE)
      }
    }
    datepickerOptions.onClose = function(dateText) {
      if (this.id === 'issue_start_date' && dateText !== '') {
        $('#issue_due_date').datepicker('option', 'minDate', dateText)
      }
    }

    /* redefine gotoToday function */
    $.datepicker._gotoToday = function(id) {
      const TARGET = $(id)
      const INST = this._getInst(TARGET[0])
      const DATE = new Date()

      this._setDate(INST, DATE)
      this._hideDatepicker()
    }
  }
})
