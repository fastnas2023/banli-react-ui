import * as React from 'react'
import { deepMerge, type PartialDeep } from './deepMerge'
import { enMessages, type AiventMessages } from './messages'

type Ctx = {
  messages: AiventMessages
}

const AiventI18nContext = React.createContext<Ctx>({ messages: enMessages })

export function AiventI18nProvider({
  messages,
  children,
}: {
  messages?: PartialDeep<AiventMessages>
  children: React.ReactNode
}) {
  const value = React.useMemo<Ctx>(() => ({ messages: deepMerge(enMessages, messages) }), [messages])
  return <AiventI18nContext.Provider value={value}>{children}</AiventI18nContext.Provider>
}

export function useAiventMessages() {
  return React.useContext(AiventI18nContext).messages
}

