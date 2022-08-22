import { ReactNode } from 'react'
import { IconContainer, InfoCardContainer } from './styles'

interface text {
  type: 'normal' | 'bold'
  text: string
}

interface InfoCardProps {
  icon: ReactNode
  color: string
  title: text[]
  subtitle?: text[]
}

export function InfoCard({ icon, color, title, subtitle }: InfoCardProps) {
  return (
    <InfoCardContainer>
      <IconContainer backgroundColor={color}>{icon}</IconContainer>
      <div>
        <p>
          {title.map((text, index) => {
            if (text.type === 'bold') {
              return <strong key={index}>{text.text}</strong>
            } else {
              return `${text.text}`
            }
          })}
        </p>
        {subtitle && (
          <p>
            {subtitle.map((text, index) => {
              if (text.type === 'bold') {
                return <strong key={index}>{text.text}</strong>
              } else {
                return `${text.text}`
              }
            })}
          </p>
        )}
      </div>
    </InfoCardContainer>
  )
}
