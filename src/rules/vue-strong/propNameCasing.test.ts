import { beforeEach, describe, expect, it } from 'vitest'
import type { SFCScriptBlock } from '@vue/compiler-sfc'
import { BG_RESET, BG_WARN, TEXT_INFO, TEXT_RESET, TEXT_WARN } from '../asceeCodes'
import { checkPropNameCasing, reportPropNameCasing, resetPropNameCasing } from './propNameCasing'

describe('checkPropNameCasing', () => {
  beforeEach(() => {
    resetPropNameCasing()
  })

  it('should not report files with camelCase props name', () => {
    const script = {
      content: `<script setup>
      const props = defineProps({
        greetingText: String,
      })`,
    } as SFCScriptBlock
    const fileName = 'proper-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(0)
    expect(reportPropNameCasing()).toStrictEqual([])
  })

  it('should not report files with lowercased single-words props name', () => {
    const script = {
      content: `<script setup>
      import { ref } from 'vue'
      defineProps({
        message: String,
      })
    </script>`,
    } as SFCScriptBlock
    const fileName = 'camelCase-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(0)
    expect(reportPropNameCasing()).toStrictEqual([])
  })

  it('should not report files with lowercased single-words + camelCase props name', () => {
    const script = {
      content: `<script setup>
      import { ref } from 'vue'
      defineProps({
        message: String,
        isOpen: Boolean
      })
    </script>`,
    } as SFCScriptBlock
    const fileName = 'camelCase-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(0)
    expect(reportPropNameCasing()).toStrictEqual([])
  })

  it('should report files with kebab-case props name', () => {
    const script = {
      content: `<script setup>
      const props = defineProps({
        'greeting-text': String
      })
    </script>`,
    } as SFCScriptBlock
    const fileName = 'mixed-case-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(1)
    expect(reportPropNameCasing()).toStrictEqual([{
      file: fileName,
      rule: `${TEXT_INFO}vue-strong ~ prop names are not camelCased${TEXT_RESET}`,
      description: `👉 ${TEXT_WARN}Rename the props to camelCase.${TEXT_RESET} See: https://vue-mess-detector.webmania.cc/rules/vue-strong/prop-name-casing.html`,
      message: `prop names are ${BG_WARN}not camelCased${BG_RESET} 🚨`,
    }])
  })

  it('should report files with PascalCase props name', () => {
    const script = {
      content: `<script setup>
      import { ref } from 'vue'
      defineProps({
        Message: String,
      })
    </script>`,
    } as SFCScriptBlock
    const fileName = 'capitalized-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(1)
    expect(reportPropNameCasing()).toStrictEqual([{
      file: fileName,
      rule: `${TEXT_INFO}vue-strong ~ prop names are not camelCased${TEXT_RESET}`,
      description: `👉 ${TEXT_WARN}Rename the props to camelCase.${TEXT_RESET} See: https://vue-mess-detector.webmania.cc/rules/vue-strong/prop-name-casing.html`,
      message: `prop names are ${BG_WARN}not camelCased${BG_RESET} 🚨`,
    }])
  })

  it('should report files with none camelCased props name', () => {
    const script = {
      content: `<script setup>
      import { ref } from 'vue'
      defineProps({
        Message: String,
        'greeting-text': String,
        'is_open': Boolean,
      })
    </script>`,
    } as SFCScriptBlock
    const fileName = 'capitalized-prop-name.vue'
    checkPropNameCasing(script, fileName)
    expect(reportPropNameCasing().length).toBe(1)
    expect(reportPropNameCasing()).toStrictEqual([{
      file: fileName,
      rule: `${TEXT_INFO}vue-strong ~ prop names are not camelCased${TEXT_RESET}`,
      description: `👉 ${TEXT_WARN}Rename the props to camelCase.${TEXT_RESET} See: https://vue-mess-detector.webmania.cc/rules/vue-strong/prop-name-casing.html`,
      message: `prop names are ${BG_WARN}not camelCased${BG_RESET} 🚨`,
    }])
  })
})
