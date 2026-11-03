<script setup lang="ts">
import { reactive, ref } from 'vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import type { ContactForm, ContactFormErrors } from '@/types'

const serviceOptions = [
  '피부과 중국 마케팅 운영',
  '중국 인플루언서 섭외',
  '중국 SNS 계정 운영',
  '콘텐츠 제작 및 캠페인',
]

const platformOptions = ['샤오홍슈', '더우인', '위챗', '통합운영 / 상담 후 결정']

const budgetOptions = ['월 600만원 이상', '월 1,000만원 이상', '월 1,500만원 이상', '상담 후 결정']

const form = reactive<ContactForm>({
  company: '',
  contact: '',
  service: serviceOptions[0],
  platform: platformOptions[3],
  budget: budgetOptions[3],
  message: '',
})

const errors = reactive<ContactFormErrors>({})
const submitState = ref<'idle' | 'ok' | 'fail'>('idle')

const isFilled = (value: string) => value.trim().length > 0

const validate = () => {
  errors.company = isFilled(form.company) ? undefined : '병원명 또는 회사명을 입력해 주세요.'
  errors.contact = isFilled(form.contact) ? undefined : '전화번호 또는 이메일을 입력해 주세요.'
  errors.service = isFilled(form.service) ? undefined : '문의 서비스를 선택해 주세요.'
  errors.platform = isFilled(form.platform) ? undefined : '희망 플랫폼을 선택해 주세요.'
  errors.budget = isFilled(form.budget) ? undefined : '예상 마케팅 예산을 선택해 주세요.'
  errors.message = isFilled(form.message) ? undefined : '문의 내용을 입력해 주세요.'

  return !Object.values(errors).some(Boolean)
}

const buildInquiryText = () =>
  [
    '[마케팅 상담 문의]',
    '',
    `병원명 / 회사명: ${form.company.trim()}`,
    `담당자 연락처: ${form.contact.trim()}`,
    `문의 서비스: ${form.service}`,
    `희망 플랫폼: ${form.platform}`,
    `예상 마케팅 예산: ${form.budget}`,
    '',
    '문의 내용:',
    form.message.trim(),
  ].join('\n')

const onSubmit = async () => {
  submitState.value = 'idle'
  if (!validate()) {
    return
  }

  try {
    await navigator.clipboard.writeText(buildInquiryText())
    submitState.value = 'ok'
  } catch {
    submitState.value = 'fail'
  }
}
</script>

<template>
  <main class="page-main">
    <section class="contact">
      <div class="contact__inner">
        <div class="contact__layout">
          <ScrollReveal tag="aside" class="contact__intro" self :threshold="0.28">
            <p class="contact__label">CONTACT · 상담 문의</p>
            <h2 class="contact__title">마케팅 상담 신청</h2>
            <p class="contact__desc">
              내용을 작성하신 뒤 협업 문의 보내기를<br />
              눌러 주세요.
            </p>
          </ScrollReveal>

          <ScrollReveal class="contact__form-panel" :threshold="0.22">
            <form class="form" novalidate @submit.prevent="onSubmit">
              <label class="form__field reveal-item">
                병원명 / 회사명
                <input
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  placeholder="회사 또는 병원명"
                />
                <small v-if="errors.company">{{ errors.company }}</small>
              </label>

              <label class="form__field reveal-item" style="transition-delay: 0.05s">
                담당자 연락처
                <input
                  v-model="form.contact"
                  type="text"
                  autocomplete="tel"
                  placeholder="전화번호 또는 이메일"
                />
                <small v-if="errors.contact">{{ errors.contact }}</small>
              </label>

              <fieldset class="form__group reveal-item" style="transition-delay: 0.1s">
                <legend>문의 서비스</legend>
                <div class="form__radios form__radios--grid">
                  <label v-for="item in serviceOptions" :key="item" class="form__radio">
                    <input v-model="form.service" type="radio" name="service" class="form__radio-input" :value="item" />
                    <span class="form__radio-mark" aria-hidden="true" />
                    <span class="form__radio-text">{{ item }}</span>
                  </label>
                </div>
                <small v-if="errors.service">{{ errors.service }}</small>
              </fieldset>

              <fieldset class="form__group reveal-item" style="transition-delay: 0.14s">
                <legend>희망 플랫폼</legend>
                <div class="form__radios form__radios--grid">
                  <label v-for="item in platformOptions" :key="item" class="form__radio">
                    <input
                      v-model="form.platform"
                      type="radio"
                      name="platform"
                      class="form__radio-input"
                      :value="item"
                    />
                    <span class="form__radio-mark" aria-hidden="true" />
                    <span class="form__radio-text">{{ item }}</span>
                  </label>
                </div>
                <small v-if="errors.platform">{{ errors.platform }}</small>
              </fieldset>

              <fieldset class="form__group reveal-item" style="transition-delay: 0.18s">
                <legend>예상 마케팅 예산</legend>
                <div class="form__radios form__radios--grid">
                  <label v-for="item in budgetOptions" :key="item" class="form__radio">
                    <input v-model="form.budget" type="radio" name="budget" class="form__radio-input" :value="item" />
                    <span class="form__radio-mark" aria-hidden="true" />
                    <span class="form__radio-text">{{ item }}</span>
                  </label>
                </div>
                <small v-if="errors.budget">{{ errors.budget }}</small>
              </fieldset>

              <label class="form__field reveal-item" style="transition-delay: 0.22s">
                문의 내용
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="현재 운영 상황, 희망 목표, 필요한 서비스 등을 입력해 주세요."
                />
                <small v-if="errors.message">{{ errors.message }}</small>
              </label>

              <button
                class="btn btn-primary form__submit reveal-item"
                style="transition-delay: 0.26s"
                type="submit"
              >
                협업 문의 보내기
              </button>

              <p v-if="submitState === 'ok'" class="form__done">문의 내용이 준비되었습니다. 붙여넣기하여 전달해 주세요.</p>
              <p v-else-if="submitState === 'fail'" class="form__done form__done--error">
                처리에 실패했습니다. 브라우저 권한을 확인해 주세요.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact {
  background: var(--gray);
}

.contact__inner {
  width: min(var(--content-w), calc(100% - 64px));
  margin: 0 auto;
  padding: 56px 0 120px;
}

.contact__layout {
  display: grid;
  grid-template-columns: minmax(260px, 300px) minmax(0, 1fr);
  align-items: stretch;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: calc(var(--radius) + 4px);
  background: var(--white);
  box-shadow: var(--shadow-md);
}

.contact__intro {
  position: sticky;
  top: calc(var(--header-h) + 24px);
  align-self: start;
  padding: 40px 32px 36px;
}

.contact__label {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--orange);
}

.contact__title {
  margin-top: 14px;
  font-size: clamp(22px, 2.2vw, 28px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.35;
  color: var(--navy);
}

.contact__desc {
  margin-top: 14px;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.7;
}

.contact__form-panel {
  padding: 40px 36px 44px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

.form__group {
  margin: 0;
  padding: 0;
  border: 0;
}

.form__group legend {
  margin-bottom: 12px;
  font-size: 13px;
  font-weight: 700;
  color: var(--navy);
}

.form__radios {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__radios--grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}

.form__radio {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 52px;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: var(--white);
  cursor: pointer;
  transition:
    border-color 0.2s var(--ease),
    background 0.2s var(--ease),
    box-shadow 0.2s var(--ease);
}

.form__radio:hover {
  border-color: #d1d5db;
  background: #fafbfc;
}

.form__radio:has(.form__radio-input:checked) {
  border-color: var(--navy);
  background: #f8fafc;
  box-shadow: inset 0 0 0 1px rgba(23, 42, 67, 0.06);
}

.form__radio:has(.form__radio-input:focus-visible) {
  outline: 2px solid rgba(242, 138, 50, 0.4);
  outline-offset: 2px;
}

.form__radio-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.form__radio-mark {
  position: relative;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #cbd5e1;
  border-radius: 50%;
  background: var(--white);
  transition: border-color 0.2s var(--ease);
}

.form__radio-mark::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--orange);
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s var(--ease);
}

.form__radio:has(.form__radio-input:checked) .form__radio-mark {
  border-color: var(--orange);
}

.form__radio:has(.form__radio-input:checked) .form__radio-mark::after {
  transform: translate(-50%, -50%) scale(1);
}

.form__radio-text {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.45;
  color: #374151;
}

.form__radio:has(.form__radio-input:checked) .form__radio-text {
  color: var(--navy);
  font-weight: 600;
}

.form__field input,
.form__field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: var(--white);
  color: var(--navy);
  font-family: inherit;
  font-size: 15px;
  font-weight: 400;
}

.form__field input::placeholder,
.form__field textarea::placeholder {
  color: #9ca3af;
}

.form__field input:focus,
.form__field textarea:focus {
  outline: 2px solid rgba(242, 138, 50, 0.35);
  border-color: var(--orange);
}

.form small {
  font-size: 12px;
  font-weight: 500;
  color: #c2410c;
}

.form__submit {
  align-self: flex-start;
  margin-top: 4px;
}

.form__done {
  padding: 14px 16px;
  background: var(--gray);
  color: var(--navy);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.7;
}

.form__done--error {
  background: #fff7ed;
  color: #9a3412;
}

.form__field textarea {
  min-height: 140px;
  resize: vertical;
}

@media (max-width: 900px) {
  .contact__layout {
    grid-template-columns: 1fr;
  }

  .contact__intro {
    position: static;
    border-right: 0;
    border-bottom: 1px solid var(--border);
    padding: 32px 24px 28px;
  }

  .contact__form-panel {
    padding: 32px 24px 36px;
  }
}

@media (max-width: 768px) {
  .contact__inner {
    width: min(var(--content-w), calc(100% - 40px));
    padding: 40px 0 88px;
  }

  .form__radios--grid {
    grid-template-columns: 1fr;
  }
}
</style>
