import { useState, useEffect } from 'react'
import './App.css'

interface ApiInfo {
  message: string;
  version: string;
  docs: string;
}

interface BacklogItem {
  id: number;
  title: string;
  status: string;
}

function App() {
  const [apiInfo, setApiInfo] = useState<ApiInfo | null>(null)
  const [items, setItems] = useState<BacklogItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_BASE_URL = 'http://localhost:8000'

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch API info
        const infoResponse = await fetch(`${API_BASE_URL}/`)
        if (!infoResponse.ok) throw new Error('Failed to fetch API info')
        const infoData = await infoResponse.json()
        setApiInfo(infoData)

        // Fetch items
        const itemsResponse = await fetch(`${API_BASE_URL}/api/items`)
        if (!itemsResponse.ok) throw new Error('Failed to fetch items')
        const itemsData = await itemsResponse.json()
        setItems(itemsData.items)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="app">
      <header>
        <h1>Personal Backlog</h1>
        {apiInfo && (
          <p className="api-info">
            Connected to {apiInfo.message} v{apiInfo.version}
          </p>
        )}
      </header>

      <main>
        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        
        {!loading && !error && (
          <div className="items-container">
            <h2>Backlog Items</h2>
            {items.length === 0 ? (
              <p>No items yet</p>
            ) : (
              <ul className="items-list">
                {items.map((item) => (
                  <li key={item.id}>
                    <span className="item-title">{item.title}</span>
                    <span className={`item-status status-${item.status}`}>
                      {item.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </main>

      <footer>
        <p>
          FastAPI Backend + React/TypeScript Frontend
          {apiInfo && (
            <> | <a href={`${API_BASE_URL}${apiInfo.docs}`} target="_blank" rel="noopener noreferrer">
              API Docs
            </a></>
          )}
        </p>
      </footer>
    </div>
  )
}

export default App
