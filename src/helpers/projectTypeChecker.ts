import fs from 'node:fs'
import path from 'node:path'
import getProjectRoot from './getProjectRoot'
import { getPackageJson } from './getPackageJson'

// eslint-disable-next-line node/prefer-global/process
const projectPath = await getProjectRoot(process.cwd()) || ''

const checkDependency = async (dependencyName: 'vue' | 'nuxt', projectRoot: string) => {
  const packageJsonPath = path.join(projectPath, 'package.json')
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = await getPackageJson(projectRoot)
    return Boolean(packageJson.dependencies[dependencyName])
  }
  return false
}

const isNuxtProject = async (projectRoot: string) => {
  const nuxtConfigFiles = ['nuxt.config.js', 'nuxt.config.ts']
  return await checkDependency('nuxt', projectRoot) || nuxtConfigFiles.some(file => fs.existsSync(path.join(projectPath, file)))
}

const isVueProject = async (projectRoot: string) => {
  const vueConfigFiles = ['vue.config.js', 'vue.config.ts']
  const isNuxt = await isNuxtProject(projectRoot)
  return !isNuxt && (await checkDependency('vue', projectRoot) || vueConfigFiles.some(file => fs.existsSync(path.join(projectPath, file))))
}

export { isNuxtProject, isVueProject }
