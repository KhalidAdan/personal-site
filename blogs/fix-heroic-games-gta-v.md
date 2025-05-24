# Fixing GTA V “Buy Now” on Steam Deck (Heroic + Epic) May 2025

## Prerequisites

* Steam Deck in **Desktop Mode** for setup.
* **Heroic Games Launcher 2.17** or newer installed.
* GTA V owned on **Epic** and launched at least once on a Windows PC to confirm the Epic ↔ Rockstar link.

## Steps

1. **Update Heroic**

   ```bash
   Discover → Updates → Heroic Games Launcher
   ```

   Make sure Heroic shows version **2.17+**.

2. **Enable Rockstar token fix**

   * Heroic → *Grand Theft Auto V* → **⚙ Game Settings** → **Advanced**
   * Under **Environment variables** add:

     ```
     USE_FAKE_EPIC_EXE=true
     ```

3. **(Recommended) Pick a recent Proton build**

   * Still in **Advanced** set **Wine/Proton version** to:

     * `GE‑Proton 9‑27` **or**
     * `Proton Experimental` dated **2025‑03‑21** or later.

4. **Launch from Heroic** (Game Mode works fine)

   * Do **not** start the Rockstar Launcher directly.
   * The launcher pops up, minimises, and GTA V loads into Story Mode.

## Troubleshooting

| Symptom                                              | Fix                                                                                                         |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Buy Now** still shows                              | Heroic → **Settings › Cache › Clear cache**, re‑login to Epic, then launch again.                           |
| Rockstar launcher crashes opening **Scan for Games** | Skip “Scan for Games”; just launch via Heroic.                                                              |
| Need a clean slate                                   | In Steam: **⚙ Properties › Compatibility › Browse prefix** → delete the folder, then re‑launch from Heroic. |

## Notes

* **GTA Online** remains blocked on Linux; Story Mode works once entitlement is detected.
* Both **Legacy** and **Enhanced** editions function after the token fix.
* Steps 3–4 improve stability and FPS but are optional if Step 2 alone solved the issue.

---

*Last updated: 24 May 2025*
