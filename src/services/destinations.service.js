import api from './api'

class DestinationsService {
  getDestinations() {
    // Handles the GET Request to the dummy API
    return api.get('/destinations')
  }
}

export default new DestinationsService()
