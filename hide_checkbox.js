/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue form (チケット入力欄の下)
 * Type: JavaScript
 *
 * @brief   Checklists 機能のチェックボックスを隠す
 */
$(function() {
  /*!
   * @brief   Item of checklist class
   * @param   listName（Checklistに書かれた内容そのまま）
   * @return  none
   */
  const Checklist = function(listName) {
    this.item = listName.replace(/^\[.*\] */g, '')

    let tags = listName
      .replace(/^[^\[\]]*(\[.*\])*.*/g, '$1')
      .replace(/[ \[]/g, '')
      .split(']')

    let filterTags = []
    $.each(tags, function(index, element) {
      if (element !== '') {
        filterTags.push(element)
      }
    })
    this.tags = filterTags
  }

  /*!
   * @note  基本的にタグがついている場合はCheckboxを隠し、条件を満たしたもののみ表示する。
   */
  if ($('#checklist_item').size()) {
    let hidden

    $(
      'input[type="checkbox"]#checklist_item,input[type="hidden"]#checklist_item'
    ).each(function(index) {
      let text = $(this)
        .closest('li')
        .text()
        .replace(/^[ \n]*/g, '') // 先頭ゴミ除去
        .replace(/[ \n]*$/g, '') // 末尾ゴミ除去

      let listItem = new Checklist(text)

      if (listItem.tags.length > 0) {
        hidden = true

        const MY_ACCOUNT = ViewCustomize.context.user
        const MY_NAME = MY_ACCOUNT.lastname + ' ' + MY_ACCOUNT.firstname

        if (
          $.inArray('only', listItem.tags) !== -1 &&
          listItem.item === MY_NAME
        ) {
          hidden = false
        }
      } else {
        hidden = false
      }

      if (hidden === true) {
        /* Hide the checkbox on the top page */
        $(this).attr({
          type: 'hidden'
        })

        /* Hide the checkbox if the condition is satisfied */
        $(
          'input[type="checkbox"]#issue_checklists_attributes_' +
            index +
            '_is_done'
        ).attr({
          type: 'hidden'
        })
      }
    })
  }
})
