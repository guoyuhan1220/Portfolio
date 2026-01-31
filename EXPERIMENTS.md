# Experiments Workflow

This repo uses git branches to keep experiments isolated from `main`.

## Quick Start

Create a new experiment branch from `main`:

```bash
git checkout main
git checkout -b experiment-<short-name>
```

Example:

```bash
git checkout -b experiment-compact-layout
```

## Make Changes

```bash
git add .
git commit -m "experiment: compact layout"
```

## Switch Back to Main

```bash
git checkout main
```

## Merge an Experiment into Main

```bash
git checkout main
git merge experiment-compact-layout
```

## Discard an Experiment

If you don't want the experiment, just stay on `main` and ignore the branch.
You can delete it later:

```bash
git branch -d experiment-compact-layout
```

## Compare Experiments

See what changed in a branch:

```bash
git diff main..experiment-compact-layout
```

## Suggested Naming

- `experiment-compact-layout`
- `experiment-project-cards`
- `experiment-intro-animation`
- `experiment-typography`

