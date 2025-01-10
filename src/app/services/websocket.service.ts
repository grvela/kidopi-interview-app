import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService implements OnDestroy {
  private socket: WebSocket | null = null;

  constructor() {
    this.connect();
  }

  private connect(): void {
    const serverUrl = 'https://rodrigovela.dev/ws';

    this.socket = new WebSocket(serverUrl);

    this.socket.onopen = () => {
      console.log('WebSocket connection established.');
    };

    this.socket.onmessage = (event) => {
      console.log('Message received from server:', event.data);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };
  }

  ngOnDestroy(): void {
    if (this.socket) {
      this.socket.close();
      console.log('WebSocket connection closed by client.');
    }
  }
}
