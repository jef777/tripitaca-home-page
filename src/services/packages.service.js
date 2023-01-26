import api from './api'

class PackagesService {
  getPackages(count) {
    // Handles the GET Request to the dummy API
    return api.get('/packages')
  }
}

export default new PackagesService()
