/** NanoFetch class */
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

  /**
   * GET request.
   * @async
   * @param {string} url - The request URL.
   * @return {Promise<object>} The response to the GET request.
   */
  async get(url) {
    return await this.#request(url);
  }

  /**
   * POST request.
   * @async
   * @param {string} url - The request URL.
   * @param {object} [body] - The request body.
   * @return {Promise<object>} The response to the POST request.
   * @
   */
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
