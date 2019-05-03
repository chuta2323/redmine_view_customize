/*!
 * Path pattern: .*
 * Insertion position: Bottom of issue detail (チケット詳細の下)
 * Type: JavaScript
 *
 * @brief   チケット添付ファイルのダウンロード直リンク化
 */
$(function() {
  /* Edit link in discription */
  $('a.icon.icon-attachment').each(function() {
    let fixUrl = $(this)
      .attr('href')
      .replace(/attachments\/(\d+)/g, 'attachments/download/$1')

    $(this).attr('href', fixUrl)
  })

  /* Edit link in history */
  $('#history')
    .find('div.journal.has-details')
    .find('ul.details')
    .find('a')
    .each(function() {
      let fixUrl = $(this)
        .attr('href')
        .replace(/attachments\/(\d+)/g, 'attachments/download/$1')

      $(this).attr('href', fixUrl)
    })
})
