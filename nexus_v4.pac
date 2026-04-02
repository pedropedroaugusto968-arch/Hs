function FindProxyForURL(url, host) {
    // [1] BYPASS & ANTI-BAN: Bloqueia logs e verificações da Garena
    // Redireciona para um IP inexistente (443) para matar o envio do log
    if (shExpMatch(host, "*.log.garena.com") || 
        shExpMatch(host, "*.crashlytics.com") || 
        shExpMatch(host, "*.fire.security.game") ||
        shExpMatch(host, "*.cloud.security.game")) {
        return "PROXY 127.0.0.1:443";
    }

    // [2] FILTRO DE COMBATE: Direciona para a sua VPS (Mitmproxy)
    // O tráfego do jogo passa por aqui para o script Python injetar o HS
    if (shExpMatch(host, "*.garena.com")) {
        
        // --- CONFIGURAÇÃO DO SEVIDOR ---
        var vps_ip = "192.168.18.60"; // Coloque o IP real da sua VPS
        
        /* SELEÇÃO DE PORTA (PLANO DO CLIENTE):
           8080 = HS Alto
           8081 = HS Pescoço + Holo (VIP)
           8082 = HS Peito (Legit)
        */
        var porta = "8081"; 

        return "PROXY " + vps_ip + ":" + porta;
    }

    // [3] INTERNET NORMAL: O resto (YouTube, Zap) passa direto (DIRECT)
    return "DIRECT";
}
