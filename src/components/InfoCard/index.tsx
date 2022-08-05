import { ReactNode } from 'react'
import { IconContainer, InfoCardContainer } from './styles'

interface InfoCardProps {
  icon: ReactNode
  color: string
  text: string
}

export function InfoCard({ icon, color, text }: InfoCardProps) {
  return (
    <InfoCardContainer>
      <IconContainer backgroundColor={color}>{icon}</IconContainer>
      <p>{text}</p>
    </InfoCardContainer>
  )
}
