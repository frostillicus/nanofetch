class NanoFetch {
  async #request(url, options = {}) {
    try {
      const response = await fetch(url, options);
      const body = await response.json();

      const output = {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        body
      };

      if (response.ok) {
        return output;
      } else {
        throw output;
      }
    } catch (error) {
      throw error;
    }
  }

  async get(url) {
    return await this.#request(url);
  }

  async post(url, body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    };

    return await this.#request(url, options);
  }
}

export default NanoFetch;
