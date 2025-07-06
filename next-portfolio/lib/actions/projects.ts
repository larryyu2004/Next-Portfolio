'use server'

import prisma from '@/lib/prisma'

export async function getAllProjects() {
  try {
    const projects = await prisma.projects.findMany({
      orderBy: {
        id: 'asc'
      }
    })
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw new Error('Failed to fetch projects')
  }
}

export async function getProjectById(id: number) {
  try {
    const project = await prisma.projects.findUnique({
      where: {
        id: id
      }
    })
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    throw new Error('Failed to fetch project')
  }
}

export async function createProject(name: string, description: string) {
  try {
    const project = await prisma.projects.create({
      data: {
        name,
        description
      }
    })
    return project
  } catch (error) {
    console.error('Error creating project:', error)
    throw new Error('Failed to create project')
  }
} 