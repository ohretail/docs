---
title: Install a register
description: Enroll a register, install the Windows app on the register PC, and set up cashier PINs.
weight: 10
status: pilot
---

Installing a register takes about half an hour, most of it waiting for the
first download of your store's data. You need an **administrator** account for
the whole process.

## What you need

- **A Windows PC for each register,** 64-bit, used only by your store. The app
  holds a full copy of your store's data, so install it only on a PC you trust,
  under a Windows account that only store staff use.
- **A good internet connection for the first start.** The register downloads
  your whole store database, including sales history. For a store with years of
  history that can be more than a gigabyte.
- **Printers already installed in Windows.** Install the drivers for your receipt
  printer and label printer, and print a Windows test page from each.
- **A register number to use,** such as 1 or 2. Each number can be installed on
  one PC only.

{{< callout type="danger" title="One register, one PC" >}}
Installing a register number is permanent. Once it's installed, that register
stops taking sales in the browser, and it can't be moved to a second PC while the
first one still has it. Never copy a register's data folder to another PC. To
replace a PC, see [Replace a register PC](troubleshooting.md#replace-a-register-pc).
{{< /callout >}}

## 1. Enroll the register

Do this once for each register, from any PC.

1. If the register has been used in the browser, finish or hold any sale on
   it and close its drawer session.
2. Sign in with your administrator account and open **Back Office → Local
   registers**.
3. Under **Enroll a register**, enter the **Register number** and an
   **Installation identity**, such as `register-1`.
4. Choose **Enroll register**, read the warning, and choose **Enroll
   permanently**.

Enrollment stops if the register still has an open drawer, an unfinished sale,
or a payment in progress. Finish those in the browser register and try again.

## 2. Download the installer and setup file

On the register PC:

1. Sign in with your administrator account and open **Back Office → Local
   registers**.
2. Under **Download the installer**, download the **Oh! Retail Windows
   installer**. The file is named `WAT-POS-Setup.exe`.
3. In the **Registers** list, choose **Download setup file** for this register.

{{< callout type="warning" title="Keep the setup file private" >}}
The setup file holds a private key to your store's data. Don't email it, put it
on a shared drive, or attach it to a GitHub issue. You'll delete it after
installing.
{{< /callout >}}

The installer itself holds no private information, so you can keep a copy for
repairs later.

## 3. Prepare the PC

1. Open `WAT-POS-Setup.exe`. The **Oh! Retail Setup** window opens.
2. Under **Prepare this PC**, setup checks for two Microsoft components that the
   register needs: the Visual C++ runtime and WebView2. If either is missing,
   choose **Install Microsoft components**. Windows asks you to approve the
   Visual C++ install once.

Setup downloads these only from Microsoft and checks Microsoft's signature
before running them. If both are already installed, there's nothing to do.

## 4. Install the register

1. Expand **Install a new register**.
2. Under **Private register configuration**, choose the setup file you
   downloaded. Setup fills in the register's details.
3. Choose the **Receipt printer** and **Label printer** from the printers
   installed in Windows.
4. Under **Displays and update settings**, choose the **Cashier display** and,
   if you have one, the **Customer display**. Set the **Drawer connector pin**
   if your cash drawer needs a different one from the default.
5. Leave **Start POS when I sign in to Windows** selected, unless you'd rather
   start it from the desktop yourself.
6. Choose **Install and start POS**.

Setup checks the register's enrollment online, installs the app with an **Oh!
Retail** shortcut on the desktop, and starts it.

## 5. Wait for the first start

An **Oh! Retail Starting...** window shows each step, with the amount downloaded
so far. The first start downloads your store's data and can take several
minutes. Leave it running. The window closes by itself when the register is
ready, with the cashier screen on the cashier display and the customer screen on
the customer display.

Later starts open the saved copy and don't wait for the internet.

## 6. Delete the setup file

Delete the setup file from **Downloads** and empty the Recycle Bin. The register
has its own copy, and **Repair and update** never needs the file again.

## 7. Set up cashier PINs

Installed registers let cashiers sign in with their name and a six-digit PIN. A
manager turns PINs on for each person, on each register PC.

1. On the cashier screen, choose **Manager sign-in**, and sign in with your
   administrator email and password.
2. The **Cashier PINs** page lists employees who have accepted their invitation.
   Select one, enter and confirm a six-digit PIN, and choose **Enable / Reset
   PIN**.
3. Repeat for each cashier who uses this register.
4. Choose **Sign out manager and choose cashier**.

Cashiers can now pick their name and enter their PIN. Employees have to accept
their invitation before they appear in the list. See
[Set up your store](../store-setup.md#3-invite-your-staff).

## 8. Check the printers and drawer

While signed in with your email and password, open **Receipts & printer** on the
register and print a test receipt and a test label. Printing is built into the
app, so there's no separate printer program to start.

Ring a small cash sale to check that the drawer opens, then void it from
**History**.

## 9. Check it reports in

Back in **Back Office → Local registers**, the register's row shows its
**Installed version** and when it was **Last seen**. A running register reports
in every five minutes. A register shown in red hasn't reported for more than 15
minutes: it's closed, the PC is off, or it can't reach the internet.

## Next

Read [Use an installed register](daily-use.md) for signing in, offline selling,
and updates.
