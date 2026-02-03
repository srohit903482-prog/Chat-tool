// Role-based access control
import { agentRepository, roleRepository } from '../db/database';
import type { Agent, Role } from '../db/schema';

export interface Permission {
  name: string;
  resource: string;
  action: string;
  description: string;
}

export function hasPermission(
  agent: Agent,
  requiredPermission: string
): boolean {
  const role = roleRepository.findById(agent.roleId);
  if (!role || !role.enabled) return false;

  return role.permissions.some(
    (p) => p.name === requiredPermission
  );
}

export function hasAnyPermission(
  agent: Agent,
  requiredPermissions: string[]
): boolean {
  const role = roleRepository.findById(agent.roleId);
  if (!role || !role.enabled) return false;

  return requiredPermissions.some((perm) =>
    role.permissions.some((p) => p.name === perm)
  );
}

export function hasAllPermissions(
  agent: Agent,
  requiredPermissions: string[]
): boolean {
  const role = roleRepository.findById(agent.roleId);
  if (!role || !role.enabled) return false;

  return requiredPermissions.every((perm) =>
    role.permissions.some((p) => p.name === perm)
  );
}

export function getAgentPermissions(agent: Agent): Permission[] {
  const role = roleRepository.findById(agent.roleId);
  return role?.permissions || [];
}

export function canAccessResource(
  agent: Agent,
  resource: string,
  action: string = 'view'
): boolean {
  const permissionName = `${resource}.${action}`;
  return hasPermission(agent, permissionName);
}