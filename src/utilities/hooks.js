import axios from 'axios'
import { useState } from 'react'

const portalId = '21596939'
const formGuid = '20abaa97-fb7a-470a-8100-4083eada2358'
const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`

const config = {
  headers: {
    'Message-Type': 'application/json'
  }
}

export const useEstimateForm = () => {
  const [status, setStatus] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const onSubmit = data => {
    const fields = Object.keys(data).map(name => {
      return {
        name,
        value: data[name]
      }
    })

    const payload = { portalId, formGuid, fields }

    setDisabled(true)

    axios.post(url, payload, config)
      .then(() => {
        setStatus('success')
        setMessage('送信完了しました。お問い合わせありがとうございます。')
      })
      .catch(() => {
        setStatus('error')
        setMessage('エラーが発生しました。時間をおいて再度お試しください。')
      })
      .finally(() => setDisabled(false))
  }

  return { status, message, disabled, onSubmit }
}
