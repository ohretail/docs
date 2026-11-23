---
title: Fix installed register problems
linkTitle: Fix problems
description: Repair and update a register that won't start, fix common Windows errors, replace a register PC, or uninstall.
weight: 30
status: pilot
---

## Repair and update

**Repair and update** fixes most problems. It downloads the latest signed
version, restores the app and its desktop shortcut, and starts the register. It
keeps everything on the PC: sales that haven't uploaded, settings, printers,
displays, and cashier PINs. You don't need the setup file.

1. Close Oh! Retail, and any error message from it.
2. Download the latest installer from **Back Office → Local registers**, on any
   PC, and copy it to the register PC. A copy you kept from installing works too,
   since repair downloads the latest version anyway.
3. Open `WAT-POS-Setup.exe`.
4. Under **Repair or update an existing register**, select the register, then
   choose **Repair and update**.

Repair won't run while the register is open. If setup says a Microsoft component
is missing, install it under **Prepare this PC** first.

## Common problems

### The register won't start, or stops at “Checking database”

Run [Repair and update](#repair-and-update). It replaces the app with the latest
version, which fixes the start-up problems we've seen so far. Don't delete the
data folder: it may hold sales that haven't uploaded.

### Error “unable to load turso library” or “The specified module could not be found”

The Microsoft Visual C++ runtime is missing. Open the installer and choose
**Install Microsoft components** under **Prepare this PC**, or install the
[Visual C++ x64 runtime](https://aka.ms/vc14/vc_redist.x64.exe) from Microsoft.
Then open Oh! Retail again.

### Error 80070002 about WebView2

Microsoft Edge WebView2 is missing. Open the installer and choose **Install
Microsoft components** under **Prepare this PC**.

### No register window, or only the customer screen

Press {{< kbd "Alt" >}}+{{< kbd "F4" >}} on the window you can see to close the app,
then open **Oh! Retail** from the desktop again. If it happens again, run
[Repair and update](#repair-and-update).

### The window won't close

A card payment is still in progress. Finish it on the card terminal, remove the
card if asked, and close the window again.

### The register shows red in Local registers

The register hasn't reported in for more than 15 minutes. Check that the PC is
on, Oh! Retail is open, and the PC can reach the internet. Sales taken in the
meantime are safe on the PC and upload once it's back online.

### The status line says “Sync will retry”

The register couldn't reach Oh! Retail's servers. It keeps selling and retries
by itself. If the message stays after your internet is back, restart the
register.

### “Update needs attention”

The register couldn't install a downloaded update and is still running its
current version. Run [Repair and update](#repair-and-update).

### PIN sign-in has disappeared

If the register can't read its PIN settings, it starts with PIN sign-in turned
off. Password sign-in still works. Restart the register. If PINs are still
missing, [contact us](https://ohretail.com/contact).

## Replace a register PC

A register number can only be installed on one PC at a time.

1. On the old PC, [uninstall the register](#uninstall). This uploads anything
   still waiting, and stops if something hasn't uploaded.
2. On the new PC, follow [Install a register](install.md) from step 2, with a
   fresh setup file for the same register. You don't need to enroll it again.

If the old PC has failed and can't be started, [contact us](https://ohretail.com/contact)
before installing on a new one. Keep the old PC's drive: sales taken offline that
never uploaded are only on it.

## Uninstall

1. Close Oh! Retail.
2. Open Windows **Settings → Apps → Installed apps**.
3. Find **Oh! Retail (Register N)** and choose **Uninstall**.

Uninstall first uploads anything still waiting. It stops if anything hasn't
uploaded, the drawer session is still open, or a sale is unfinished: open the
register, finish up, and try again.

Uninstall removes the desktop shortcut, the start-up entry, and the entry in
Installed apps. It moves the register's data to a **Removed** folder beside the
original rather than deleting it. Delete that folder once you're sure you won't
need its logs or print history.

Uninstalling doesn't un-enroll the register. The register number stays
installed-only, and you can install it again on the same PC or a replacement.

## Reporting a problem

If a fix here doesn't work, [report a problem](https://github.com/ohretail/docs/issues/new?template=bug.yml).
Include the register's version from **Back Office → Local registers**, what you
were doing, and the exact message you saw.

The register keeps a log, `pos.log`, in its data folder,
`%LOCALAPPDATA%\oh-retail-pos\register-N`. If we ask for it, send it to us
privately rather than attaching it to a public issue.
