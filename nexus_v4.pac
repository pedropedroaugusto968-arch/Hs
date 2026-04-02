function FindProxyForURL(url, host) {
    // [1] BYPASS & ANTI-BAN: Bloqueia logs e verificações da Garena
    if (shExpMatch(host, "*.log.garena.com") || 
        shExpMatch(host, "*.crashlytics.com") || 
        shExpMatch(host, "*.fire.security.game") ||
        shExpMatch(host, "*.cloud.security.game")) {
        return "PROXY 127.0.0.1:443";
    }

    // [2] FILTRO DE COMBATE: Direciona para a sua VPS
    if (shExpMatch(host, "*.garena.com")) {
        
        // --- CONFIGURAÇÃO DO SERVIDOR ---
        var vps_ip = "SEU_IP_AQUI"; // Coloque o IP da sua VPS aqui
        
        /* SELEÇÃO DE PORTA (HACK):
           8080 = HS Alto
           8081 = HS Pescoço + Holo
           8082 = HS Peito
        */
        var porta = "8081"; 

        return "PROXY " + vps_ip + ":" + porta;
    }

    // [3] INTERNET NORMAL: O resto passa direto sem lag
    return "DIRECT";
}
