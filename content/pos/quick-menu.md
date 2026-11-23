---
title: Arrange the register menu
linkTitle: Arrange the register menu
description: Drag tiles to build the touchscreen menu every register shares, with departments, custom menus, and colors.
weight: 30
status: available
---

The register's touchscreen menu has a button for each department down the left
edge and a grid of item tiles beside it. Tiles can open further menus, so even a
large catalog is only a few taps deep: **Feed → Chicken → Layer pellets**.

All registers share one menu. Your changes are a draft until you choose **Save
changes**, and then every register gets them.

{{< shot name="pos-menu-editor" alt="The menu editor, with the item list on the left and a preview of the register's Feed menu on the right. An item is being dragged onto an empty slot." caption="The menu editor, mid-drag. The item list is on the left and the register preview on the right." >}}

## Open the editor

On the register, choose **Edit** in the menu heading. Anyone signed in with an
email and password can edit the menu. Editing doesn't interrupt a sale in
progress.

The editor shows your catalog on the left and a preview of the register on the
right, exactly as cashiers will see it.

## Add, move, and remove tiles

Add an item
: Drag it from the item list onto a slot in the preview. You can place any
  item on any department's menu, whatever its catalog department.

Move a tile
: Drag it to an empty slot. The slot it came from is left empty.

Swap two tiles
: Drag one tile onto the other.

Remove a tile
: Drag it onto **Remove from this menu** below the item list. The item stays in
  your catalog and on any other menus.

On a touchscreen, you can also tap an item to select it, then tap the slot to
put it in.

Search the item list by name, item number, or department. Search covers the
whole catalog, so you can find an item from another department and drag it onto
this one.

**Undo** steps back through your recent changes, up to 30, until you save.

## Departments

Select a department button in the preview to change it:

- **Display name** changes the button's label without renaming the department
  in your catalog or reports. Leave it blank to use the department's own name.
- **Move department up** and **Move department down** (↑ and ↓) change the order
  of the buttons. The first visible department opens when the register starts.
- **Hide/Show** hides the department's button on the register. Its items can
  still be scanned and searched.

New departments start hidden. When you add items in a new department, open the
editor, select the department, choose **Show**, and save.

## Custom menus

A custom menu is a button that isn't tied to one catalog department, for
example "Specials" or "Seasonal". Choose **New custom menu**, name it, and drag
in items from any department.

**Rename** changes its label and keeps the layout. **Delete menu** removes only
the menu and its tiles. The items stay in your catalog.

## Menus inside menus

To make a tile that opens another menu, like **Chicken** inside **Feed**:

1. Make the inner menu first, as a [custom menu](#custom-menus) or a
   department, and fill it with items.
2. Open the outer menu in the preview.
3. Pick the inner menu in **Menu to link**, choose **Select menu link**, and tap
   an empty slot.

On the register, the tile opens the inner menu, and **Back** and **Home** lead
out again. If the inner menu shouldn't also have its own button down the left
edge, select it and choose **Hide**. A hidden menu still opens from its link
tile.

## Colors

Tiles use the register's theme colors unless you choose your own. Select an item
tile or a department and choose **Colors** to pick its **Background** and
**Foreground** (text) colors. **Use contrasting text** picks black or white,
whichever is easier to read on your background. **Use theme colors** goes back
to the theme. **Back to items** returns to the item list.

## Hide an item

**Hide/Show** also works on an item. A hidden item keeps its slots in the editor,
dimmed, and the register skips it on **every** menu it's on. It can still be
scanned and searched. Use it for seasonal items you'll bring back. To take an
item off just one menu, use **Remove from this menu** instead.

## Pages and grid size

Each menu shows five columns and five rows of tiles per page. You can choose
between two and six columns.

- **Add page** gives the menu another page of empty slots.
- **Remove page** removes the current page's tiles from this menu and moves the
  later pages up. The items stay in your catalog.

Changing the number of columns doesn't rearrange tiles, so move tiles out of a
column before you remove it.

## Account payment tile

Stores with customer charge accounts can put an **Account payment** tile on a
menu, so cashiers can take a payment on a customer's account without leaving
the sale. Choose **Select account payment tile**, then tap a slot. Each menu can
have one.

## Save your changes

Choose **Save changes**. Every register gets the new menu: reload the register
page, or reconnect, to see it. Installed registers pick up the change once
they've synced, usually within a minute.

If someone else saved the menu while you were editing, Oh! Retail won't
overwrite their changes. It keeps your draft on screen so you can choose
**Reload** and make your changes again.

{{< callout note >}}
New catalog items are added to the end of their department's menu
automatically, using default colors. They don't fill empty slots, so you decide
where each new item goes.
{{< /callout >}}
