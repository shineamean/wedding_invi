// 커스텀 알림 모달 컴포넌트

export interface AlertConfig {
  title?: string
  message: string
  type?: 'success' | 'error' | 'info'
  duration?: number
}

class CustomAlertClass {
  private static instance: CustomAlertClass | null = null
  
  static getInstance(): CustomAlertClass {
    if (!CustomAlertClass.instance) {
      CustomAlertClass.instance = new CustomAlertClass()
    }
    return CustomAlertClass.instance
  }

  show(config: AlertConfig): void {
    const { title, message, type = 'info', duration = 3000 } = config
    
    // 기존 알림이 있다면 제거
    this.removeExisting()
    
    // 알림 엘리먼트 생성
    const alertElement = this.createAlertElement(title, message, type)
    
    // DOM에 추가
    document.body.appendChild(alertElement)
    
    // 애니메이션으로 표시
    requestAnimationFrame(() => {
      alertElement.classList.add('show')
    })
    
    // 자동 제거
    setTimeout(() => {
      this.removeAlert(alertElement)
    }, duration)
  }

  private createAlertElement(title: string | undefined, message: string, type: string): HTMLElement {
    const alertDiv = document.createElement('div')
    alertDiv.className = `custom-alert custom-alert-${type}`
    
    const contentDiv = document.createElement('div')
    contentDiv.className = 'custom-alert-content'
    
    if (title) {
      const titleDiv = document.createElement('div')
      titleDiv.className = 'custom-alert-title'
      titleDiv.innerHTML = title
      contentDiv.appendChild(titleDiv)
    }
    
    const messageDiv = document.createElement('div')
    messageDiv.className = 'custom-alert-message'
    messageDiv.innerHTML = message
    contentDiv.appendChild(messageDiv)
    
    const closeBtn = document.createElement('button')
    closeBtn.className = 'custom-alert-close'
    closeBtn.innerHTML = '×'
    closeBtn.onclick = () => alertDiv.remove()
    contentDiv.appendChild(closeBtn)
    
    alertDiv.appendChild(contentDiv)
    
    return alertDiv
  }

  private removeExisting(): void {
    const existing = document.querySelector('.custom-alert')
    if (existing) {
      existing.remove()
    }
  }

  private removeAlert(alertElement: HTMLElement): void {
    alertElement.classList.add('hide')
    setTimeout(() => {
      if (alertElement.parentElement) {
        alertElement.remove()
      }
    }, 300)
  }
}

// 전역 함수로 쉽게 사용할 수 있게 설정
export const showAlert = (config: AlertConfig) => {
  CustomAlertClass.getInstance().show(config)
}

export default CustomAlertClass

