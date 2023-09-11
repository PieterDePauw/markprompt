import { Project } from '@/types/types';

import { getResponseOrThrow } from '../utils';

export const setMetadata = async (
  projectId: Project['id'],
  integrationId: string,
  connectionId: string,
  metadata: any,
) => {
  const res = await fetch(
    `/api/project/${projectId}/integrations/nango/set-metadata`,
    {
      method: 'POST',
      body: JSON.stringify({ integrationId, connectionId, metadata }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    },
  );
  return getResponseOrThrow<void>(res);
};

export const deleteConnection = async (
  projectId: Project['id'],
  integrationId: string,
  connectionId: string,
) => {
  const res = await fetch(
    `/api/project/${projectId}/integrations/nango/delete-connection`,
    {
      method: 'POST',
      body: JSON.stringify({ integrationId, connectionId }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    },
  );
  return getResponseOrThrow<void>(res);
};

export const triggerSync = async (
  projectId: Project['id'],
  integrationId: string,
  connectionId: string,
  syncIds?: string[],
) => {
  const res = await fetch(
    `/api/project/${projectId}/integrations/nango/trigger-sync`,
    {
      method: 'POST',
      body: JSON.stringify({ integrationId, connectionId, syncIds }),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    },
  );
  return getResponseOrThrow<void>(res);
};
