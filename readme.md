<a name="NanoFetch"></a>

## NanoFetch
NanoFetch class

**Kind**: global class  

* [NanoFetch](#NanoFetch)
    * [.get(url)](#NanoFetch+get) ⇒ <code>Promise.&lt;object&gt;</code>
    * [.post(url, [body])](#NanoFetch+post) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="NanoFetch+get"></a>

### nanoFetch.get(url) ⇒ <code>Promise.&lt;object&gt;</code>
GET request.

**Kind**: instance method of [<code>NanoFetch</code>](#NanoFetch)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response to the GET request.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The request URL. |

<a name="NanoFetch+post"></a>

### nanoFetch.post(url, [body]) ⇒ <code>Promise.&lt;object&gt;</code>
POST request.

**Kind**: instance method of [<code>NanoFetch</code>](#NanoFetch)  
**Returns**: <code>Promise.&lt;object&gt;</code> - The response to the POST request.
@  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The request URL. |
| [body] | <code>object</code> | The request body. |

