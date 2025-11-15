# Créé par Heber, le 09/09/2025 en Python 3.7
import http.server, socketserver, threading, webbrowser, os, json, time, socket, sys, pathlib, random

# ---- Config de base
START_PORT = 5500
OPEN_TABS  = True  # ouvre automatiquement le navigateur

ROOT = pathlib.Path(__file__).resolve().parent

def find_free_port(start=START_PORT, limit=30):
    for p in range(start, start+limit):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind(("127.0.0.1", p))
                return p
            except OSError:
                continue
    raise RuntimeError("Aucun port libre trouvé.")

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    # Types MIME utiles (au cas où)
    extensions_map = {
        **http.server.SimpleHTTPRequestHandler.extensions_map,
        ".json": "application/json",
        ".webp": "image/webp",
        "": "application/octet-stream",
    }
    def end_headers(self):
        # Désactive le cache pour faciliter les tests
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        return super().end_headers()

def start_server(port, root):
    Handler = NoCacheHandler
    os.chdir(root)
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", port), Handler)
    t = threading.Thread(target=httpd.serve_forever, daemon=True)
    t.start()
    return httpd

def load_json_cards_ids():
    """Essaie de lire quelques IDs de cartes du mod1 pour fabriquer des liens de test."""
    path = ROOT / "cards" / "cards_mod1.json"
    ids = []
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        # on prend jusqu'à 5 ids
        for e in data:
            if isinstance(e, dict) and "id" in e:
                ids.append(e["id"])
        # tri stable et échantillon
        ids = ids[:5]
    except Exception as e:
        # fallback si le fichier n'existe pas encore
        ids = ["nyxite_ore", "red_ore", "stickofaurasteel"]
    return ids

def load_patchnote_id():
    """Essaie de lire un ID de patchnote (le premier) pour fabriquer un lien de test."""
    path = ROOT / "patchnotes.json"
    try:
        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)
        if isinstance(data, list) and data:
            first = data[0]
            if isinstance(first, dict) and "id" in first:
                return str(first["id"])
    except Exception:
        pass
    return None

def main():
    port = find_free_port()
    srv  = start_server(port, ROOT)

    base = f"http://127.0.0.1:{port}"
    cache_buster = f"v={int(time.time())}"

    # Liens utiles
    home_url   = f"{base}/?{cache_buster}"
    mod1_url   = f"{base}/#{'p=mod1'}"
    mod2_url   = f"{base}/#{'p=mod2'}"
    pn_list    = f"{base}/#{'p=patchnotes'}"

    card_ids   = load_json_cards_ids()
    pn_id      = load_patchnote_id()

    deep_links = []
    for cid in card_ids:
        deep_links.append(f"{base}/#p=mod1&card={cid}")

    if pn_id:
        deep_links.append(f"{base}/#p=patchnotes&pn={pn_id}")

    print("\n================= SERVEUR LANCÉ =================")
    print(f"📂 Dossier : {ROOT}")
    print(f"🌐 URL     : {base}")
    print("=================================================\n")

    print("✔ Ouvre ces liens pour tester :")
    print(f"  - Accueil      : {home_url}")
    print(f"  - Mod1 (Acatar): {mod1_url}")
    print(f"  - Mod2         : {mod2_url}")
    print(f"  - Patch Notes  : {pn_list}")
    if deep_links:
        print("  - Liens profonds (cartes / patchnote) :")
        for url in deep_links:
            print(f"    · {url}")
    else:
        print("  - (Pas de deep links trouvés — ajoute des données pour tester.)")

    print("\n🧪 Comment tester le bouton « Copier le lien » :")
    print("  1) Ouvre Mod1 → clique une carte → clique « 🔗 Copier le lien »")
    print("  2) Colle dans un bloc-notes : l’URL doit ressembler à  #p=mod1&card=... ")
    print("  3) Colle l’URL dans un nouvel onglet : la même carte doit s’ouvrir directement.")
    print("  4) Fais pareil dans Patch Notes (si un id est disponible).")

    # Ouverture automatique
    if OPEN_TABS :
        webbrowser.open_new_tab(home_url)


    print("\nAppuie sur Ctrl+C ici pour arrêter le serveur.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nArrêt…")
    finally:
        try:
            srv.shutdown()
        except Exception:
            pass

if __name__ == "__main__":
    main()
