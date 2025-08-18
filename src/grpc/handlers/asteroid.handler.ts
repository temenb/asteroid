import * as grpc from '@grpc/grpc-js';
import * as AuthGrpc from '../../generated/auth';
import * as asteroidService from '../../services/asteroid.service';
import * as heathService from '../../services/health.service';

export const callbackError = (callback: grpc.sendUnaryData<any>, err: unknown) => {
  const message = err instanceof Error ? err.message : 'Unknown error';
  callback({ code: grpc.status.INTERNAL, message }, null);
};

export const health = async (
  call: grpc.ServerUnaryCall<AuthGrpc.Empty, AuthGrpc.HealthReport>,
  callback: grpc.sendUnaryData<AuthGrpc.HealthReport>
) => {
  try {
    const response = await heathService.health();

    callback(null, response);

  } catch (err: any) {
    callbackError(callback, err);
  }
};

export const status = async (
  call: grpc.ServerUnaryCall<AuthGrpc.Empty, AuthGrpc.StatusInfo>,
  callback: grpc.sendUnaryData<AuthGrpc.StatusInfo>
) => {
  try {
    const response = await heathService.status();

    callback(null, response);

  } catch (err: any) {
    callbackError(callback, err);
  }
};

export const livez = async (
  call: grpc.ServerUnaryCall<AuthGrpc.Empty, AuthGrpc.LiveStatus>,
  callback: grpc.sendUnaryData<AuthGrpc.LiveStatus>
) => {
  try {
    const response = await heathService.livez();

    callback(null, response);

  } catch (err: any) {
    callbackError(callback, err);
  }
};

export const readyz = async (
  call: grpc.ServerUnaryCall<AuthGrpc.Empty, AuthGrpc.ReadyStatus>,
  callback: grpc.sendUnaryData<AuthGrpc.ReadyStatus>
) => {
  try {
    const response = await heathService.readyz();

    callback(null, response);

  } catch (err: any) {
    callbackError(callback, err);
  }
};
