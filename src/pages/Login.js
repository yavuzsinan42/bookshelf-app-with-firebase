import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }
  
  return (
    <div>
      <h2>Giriş Yapın</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email Adresiniz:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Parolanız:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>Giriş</button>
      </form>
    </div>
  )
}