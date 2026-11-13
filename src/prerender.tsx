import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server.edge'
import App from './App'

export function prerender() {
    return {
        html: renderToString(
            <StrictMode>
                <App />
            </StrictMode>,
        ),
    }
}
