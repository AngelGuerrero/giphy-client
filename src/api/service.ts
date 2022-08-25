import axios from 'axios'

class Service {
  endpoint: string = ''

  withDebug: boolean = false

  service: any = null

  constructor(endpoint) {
    this.endpoint = endpoint
    this.withDebug = import.meta.env.VITE_DEBUG

    this.service = axios.create({
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY
      }
    })

    this.service.interceptors.request.use(
      response => {
        return response
      },

      error => {
        // @TODO: handler error here
        return Promise.reject({ error: true, message: 'Something went wrong!' })
      }
    )
  }

  createParams(params): string {
    console.log('params :>> ', params)
    return new URLSearchParams(params).toString()
  }

  async all(url, params: object = {}) {
    this._logger('all', params)

    try {
      return await this.service.get(`${this.endpoint}/${url}`)
    } catch (error) {
      return error
    }
  }

  async get(url, params) {
    this._logger('get', params)
    const res = await this.service.get(url, { params })

    return res
  }

  async show(id, params = {}) {
    this._logger('show', params)
    const res = await this.service.get(`${this.endpoint}/${id}`, { params })

    return res
  }

  async update(id, data = {}) {
    this._logger('update', { id, ...data })
    data['_method'] = 'PUT'
    const res = await this.service.put(`${this.endpoint}/${id}`, data)

    return res
  }

  async create(data) {
    this._logger('create', data)
    const res = await this.service.post(`${this.endpoint}`, data)

    return res
  }

  async delete(id) {
    this._logger('delete', id)
    const res = await axios.delete(`${this.endpoint}/${id}`)

    return res
  }

  _logger(method: string, params: object = {}) {
    if (!this.withDebug) return

    console.group(`Debug initial request`)
    console.log(`method: ${method} - endpoint: ${this.endpoint}`)
    console.log('params:')
    console.log(JSON.stringify(params, null, 4))
    console.groupEnd()
  }
}

export { Service }
