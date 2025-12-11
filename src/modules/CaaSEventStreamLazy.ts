/**
 * Lazy-loading wrapper for CaaSEventStream to prevent browser import errors.
 *
 * This module provides a browser-safe way to import CaaSEventStream.
 * The actual CaaSEventStream (which depends on better-sse) is only loaded
 * when getEventStreamHandler() is called, which should only happen on the server.
 *
 * Usage:
 * ```typescript
 * import { CaaSEventStream } from 'fsxa-api'
 *
 * // On server (Node.js):
 * const handler = CaaSEventStream.getEventStreamHandler(api)
 *
 * // In browser: CaaSEventStream exists but won't load better-sse unless called
 * ```
 */

import type { FSXARemoteApi } from './FSXARemoteApi'
import type { Request, Response } from 'express'

/**
 * Lazy-loaded CaaSEventStream namespace.
 * Prevents better-sse from being bundled in browser builds while maintaining API compatibility.
 */
export const CaaSEventStream = {
  /**
   * Get the event stream handler for server-side usage.
   * This function dynamically imports CaaSEventStream only when called (server-side).
   *
   * @throws Error if called in a browser environment (better-sse not available)
   */
  getEventStreamHandler: async (api: FSXARemoteApi) => {
    // Dynamic import - only loads when function is called (server-side)
    const { eventStreamHandler } = await import('./CaaSEventStream')
    return eventStreamHandler(api)
  },

  /**
   * Direct handler function for Express routes.
   * Returns an Express middleware that handles SSE connections.
   */
  handler: async (api: FSXARemoteApi) => {
    const handler = await CaaSEventStream.getEventStreamHandler(api)
    return (req: Request, res: Response) => handler(req, res)
  },
}

// Re-export type for TypeScript support
export type { FSXARemoteApi }
