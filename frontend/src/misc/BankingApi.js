import axios from 'axios'

export const bankingApi = {
  authenticate,
  register,
  getUser,
  logout,
  getTransactions,
  withdraw,
  deposit,
  transfer,
  getCreditCardTransactions,
  applyCreditCard
}

function authenticate(username, password) {
  return instance.post('/api/v1/login', { username, password }, {
    headers: { 'Content-type': 'application/json' }
  })
}

function register(user) {
  return instance.post('/api/v1/register', user, {
    headers: { 'Content-type': 'application/json' }
  })
}

function getUser(user) {
  const url = "/api/v1/users/me";
  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  });
}

function logout() {
  return instance.post('/api/v1/logout', null, {
    withCredentials: true
  })
}

function getTransactions(bankAccountId) {
  const url = `/api/v1/bank-accounts/${bankAccountId}/history`;

  return instance.get(url, {
    withCredentials: true
  });
}

function withdraw(bankAccountNumber, amount) {
  return instance.post('api/v1/bank-accounts/withdraw', {
    'bankAccountNumber': bankAccountNumber,
    'amount': amount
  }, {
    withCredentials: true
  })

}

function deposit(bankAccountNumber, amount) {
  return instance.post('api/v1/bank-accounts/deposit', {
    'bankAccountNumber': bankAccountNumber,
    'amount': amount
  }, {
    withCredentials: true
  })
}

function transfer(fromBankAccountNumber, toBankAccountNumber, amount) {
  return instance.post('/api/v1/bank-accounts/transfer', {
    'fromBankAccountNumber': fromBankAccountNumber,
    'toBankAccountNumber': toBankAccountNumber,
    "amount": amount
  }, {
    withCredentials: true
  })
}

function getCreditCardTransactions(creditCardId, user) {
  const url = `/api/v1/credit-cards/${creditCardId}/history`;

  return instance.get(url, {
    headers: { 'Authorization': basicAuth(user) }
  });
}

function applyCreditCard(annualSalary, cardType, user) {
  return instance.post('/api/v1/credit-cards/apply', {
    'annualSalary': annualSalary,
    'cardType': cardType
  }, {
    headers: { 'Authorization': basicAuth(user) }
  })
}


// -- Axios
const instance = axios.create({
  baseURL: "http://localhost:8080"
})

// -- Helper functions

function basicAuth(user) {
  return `Basic ${user.authdata}`
}

