import { ssrDocument } from "./mock-document"
import { ssrWindow } from "./mock-window"

export const mockEnv = {
  window: ssrWindow,
  document: ssrDocument,
}