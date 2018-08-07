import Timeago from 'timeago.js'

export function timeago(str) {
  const Timeago_data = new Timeago(null, 'zh_CN')
  if (!str) return ''
  return Timeago_data.format(new Date(str))
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString()
}