import { PermissionsAndroid } from 'react-native';

export const isValidUUID = (uuid) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    uuid,
  );
};
export const checkPermissions = async () => {
  const canWrite = await PermissionsAndroid.check(
    'android.permission.WRITE_EXTERNAL_STORAGE',
  );
  const canRead = await PermissionsAndroid.check(
    'android.permission.READ_EXTERNAL_STORAGE',
  );
  if (!canWrite) {
    await PermissionsAndroid.request(
      'android.permission.WRITE_EXTERNAL_STORAGE',
    );
  }
  if (!canRead) {
    await PermissionsAndroid.request(
      'android.permission.READ_EXTERNAL_STORAGE',
    );
  }
};
