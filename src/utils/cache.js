class Cache {
  constructor(storageType = 'localStorage') {
    this.storage =
      storageType === 'sessionStorage' ? sessionStorage : localStorage
  }
  setCache(key, value) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  remove(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }
}

const localCache = new Cache('localStorage')
const sessionCache = new Cache('sessionStorage')

export { localCache, sessionCache }
