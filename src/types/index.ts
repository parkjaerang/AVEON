export interface NavItem {
  id: string
  label: string
  to: string
  /** true면 메뉴 표시만 하고 라우팅하지 않음 */
  disabled?: boolean
}

export interface ServiceItem {
  index: string
  title: string
  summary: string
  items: string[]
}

export interface ContactForm {
  company: string
  contact: string
  service: string
  platform: string
  budget: string
  message: string
}

export type ContactFormErrors = Partial<Record<keyof ContactForm, string>>
